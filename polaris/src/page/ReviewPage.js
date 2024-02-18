import styled from "styled-components";
import FooterBar from "../component/FooterBar";
import NavBar from "../component/NavBar";
import ReviewComment from "../component/ReviewComment";
import StarRating from '../component/StarRating.js'
import axios from "axios";
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from "react-router-dom";

const ReviewPage = () => {

    const { state } = useLocation();

    const fetchBookReviewList = async () => {
    try {
      const res = await axios.post('http://localhost:3001/book/info/review/list', { isbn: state }, { withCredentials: true });
      const data = res.data;

      console.log(data)

      return data;
    } catch (err) {
      console.log(err)
    }
  }

  const reviewQuery = useQuery({
      queryKey: ["book-review-list"],
      queryFn: fetchBookReviewList
  })

  const handleReviewList = (review) => {
    const list = review.map((item, index) => {
        return <ReviewComment index={index} review={item} />
      })

    return list;
  }

  return (
    <>
      <NavBar />
      <Container>
        <ReviewContainer>
          {!reviewQuery.isFetching && reviewQuery.data && <>
          {/* review title */}
          <ReviewTitleBox>
            <ReviewTitle>
              <TitleText color={'#4659A9'} size={'18px'}>다른 탐험자들의 리뷰</TitleText>
              <TitleText color={'#97A4E8'} size={'18px'}>30</TitleText>
            </ReviewTitle>
            <EvaluateBox>
              <StarRating rating={3.8} size={'20px'} />
              <TitleText style={{marginTop: 4, marginLeft: 5}} color={'#97A4E8'} size={'16px'}>3.8</TitleText>
            </EvaluateBox>
          </ReviewTitleBox>
          {/* review content */}
          <ReviewContentBox>
              {handleReviewList(reviewQuery.data)}
            </ReviewContentBox>
          </>}
        </ReviewContainer>
        <div style={{ height: 30 }} />
      </Container>
      <FooterBar />
    </>
  );
};

// main container
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  background: linear-gradient(#c4cef9, #facecb, #ffffff);
  padding: 40px 20px;
`;

// sub container
const ReviewContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 5fr;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0px 2px 7px #ddd;
`;

// text
const TitleText = styled.text`
  color: ${(props) => props.color || 'gray'};
  font-family: "KOTRA_BOLD";
  font-size: ${(props) => props.size || '12px'};
`;

// box
const ReviewTitleBox = styled.div`
  display: grid;
  grid-template-columns: 220px 150px;
`;

const ReviewContentBox = styled.div`
  display: flex;
  flex-direction: column;
`; 

const EvaluateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

// conetnt
const ReviewTitle = styled.div`
  display: grid;
  grid-template-columns: 175px 1fr;
`;


export default ReviewPage;
