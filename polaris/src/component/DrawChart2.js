import styled from "styled-components";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import * as helpers from 'chart.js/helpers';
// import LabelPluginProvider from './LabelPluginProvider'

const DrawChart2 = ({ legendContainerId }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const types = [];
  let typeCnt = new Map();
  

  const fetchReviewList = async () => {
    try {
        const response = await axios.get(`/api/mypage/star-review`, { withCredentials: 'true'});
        const data = response.data;
        
        return data;
    } catch (err) {
        console.log(err)
    }
}

  const ReviewQuery = useQuery({
      queryKey: ["review-list"],
      queryFn: fetchReviewList
  })

  const initCount = () => {
    return typeCnt.forEach((value, key, map) => {
      map.set(key, 0);
    });;
};

  useEffect(() => {
    if (ReviewQuery.data.findMyReview) {
          initCount();
          ReviewQuery.data.reviewList.forEach(review => {
            if (!typeCnt.has(review.type)) {
              typeCnt.set(review.type, 0);
              types.push(review.type);
            }
            typeCnt.set(review.type, typeCnt.get(review.type) + 1);
          });
      }
  }, [ReviewQuery.data])

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    

    const customLegendPlugin = {
      afterDraw: function (chart) {
        let ul = document.createElement('ul');
        ul.style.listStyleType = 'none';
        let color = chart.data.datasets[0].backgroundColor;

        chart.data.labels.forEach(function (label, index) {
          ul.innerHTML += `<li style="margin-bottom: 5px; display: inline-block; margin-right: 10px; color: ${color[index]};">
            <span style="background-color: ${color[index]}; display: inline-block; width: 20px; height: 20px; border-radius: 50%; margin-right: 3px; border: 1.5px solid white"></span>
            ${label}
          </li>`;
        });

        let legendContainer = document.getElementById(`legend-container-${legendContainerId}`);
        legendContainer.innerHTML = ul.outerHTML;
      },
    };

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: types,
        datasets: [{
          data: Array.from(typeCnt.values()),
          backgroundColor: [
            '#2C2C60', '#4659A9', '#97A4E8', '#6F61C6', '#CBCDFA', '#D5CFFB'
          ],
          borderWidth: 1.5
        }]
      },
      options: {
        plugins: {
          htmlLegend: {
            containerID: `legend-container-${legendContainerId}`,
          },
          legend: {
            display: false,
          },
          datalabels: {
            formatter: function (value, ctx) {
              var value = ctx.dataset.data[ctx.dataIndex];
              return value > 0 ? Math.round(value / Object.keys(ReviewQuery.data.reviewList).length * 100) + ' %' : null;
            },
            font: {
              size: '17px',
            },
            color: 'white',
          },
        }
      },
      plugins: [customLegendPlugin, ChartDataLabels],
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <DrawChartContainer>
      <div style={{ marginRight: '20px' }}>
        <canvas ref={chartRef} id={`myChart-${legendContainerId}`} width="220px" height="220px"></canvas>
      </div>
      <div id={`legend-container-${legendContainerId}`} className="legend-div"></div>
      <style>
        {`
          #legend-container-${legendContainerId} ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            margin: 0;
            font-weight: 600;
            text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
          }

          #legend-container-${legendContainerId} ul li span {
            vertical-align: middle;
          }
        `}
      </style>
    </DrawChartContainer>
  );
};

const DrawChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DrawChart2;
