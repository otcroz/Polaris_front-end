import styled from "styled-components";
import FooterBar from "../component/FooterBar";
import NavBar from "../component/NavBar";
import ReviewComment from "../component/ReviewComment";
import StarRating from '../component/StarRating.js'
import { ReactComponent as ICLike } from "../assets/ic-like-sel.svg";
import BookProgressDropDown from '../component/BookProgressDropDown';

const BookInfoPage = () => {
  return (
    <>
      <Container>
        {/* book info */}
        <TitleText style={{ justifySelf: 'center' }}  color={'#4659A9'} size={'24px'}>도서 제목</TitleText>
        <InfoContainer>
          <InfoBookBox>
            {/* book image */}
            <BookImageBox>
              <img style={{ width: '150px', height: '200px' }} />
              <StarRating rating={3.5} size={'25px'} />
              <LikeBox>
                <ICLike />
                <TitleText color={'#97A4E8'} size={'16px'}>43</TitleText>
              </LikeBox>
            </BookImageBox>
            {/* book content */}
            <InfoContentBox>
              <InfoContentTextBox>
                <InfoTitleText>지은이: </InfoTitleText>
                <InfoContentText>롸롸롸</InfoContentText>
              </InfoContentTextBox>
              <InfoContentTextBox>
                <InfoTitleText>출판사: </InfoTitleText>
                <InfoContentText>롸롸롸</InfoContentText>
              </InfoContentTextBox>
              <InfoContentTextBox>
                <InfoTitleText>쪽수: </InfoTitleText>
                <InfoContentText>롸롸롸</InfoContentText>
              </InfoContentTextBox>
              <InfoContentTextBox>
                <InfoTitleText>isbn: </InfoTitleText>
                <InfoContentText>롸롸롸</InfoContentText>
              </InfoContentTextBox>
            </InfoContentBox>
            <InfoContentDetailBox>
              <InfoTitleText>책정보: </InfoTitleText>
              <InfoContentText>이 책은 아주 작가 자전적인 소설이구요 블라블라 어쩌구 저쩌구 웅냥 이 책은 아주 작가 자전적인 소설이구요 블라블라 어쩌구 저쩌구 웅냥 이 책은 아주 작가 자전적인 소설이구요 블라블라 어쩌구 저쩌구 웅냥 이 책은 아주 작가 자전적인 소설이구요 블라블라 어쩌구 저쩌구 웅냥 이 책은 아주 작가 자전적인 소설이구요 블라블라 어쩌구 저쩌구 웅냥 이 책은 아주 작가 자전적인 소설이구요 블라블라 어쩌구 저쩌구 웅냥 </InfoContentText>
            </InfoContentDetailBox>
          </InfoBookBox>
          <ButtonBox>
            <Button>북킷리스트에 추가</Button>
            <Button>알라딘에서 책 구매하기</Button>
            <BookProgressDropDown />
          </ButtonBox>
        </InfoContainer>
        <div style={{ height: 30 }} />
        {/* review info */}
        <ReviewContainer>
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
            <TitleText style={{justifySelf: 'flex-end'}} color={'#4659A9'} size={'15px'}>더보기</TitleText>
          </ReviewTitleBox>
          {/* review content */}
          <ReviewContentBox>
            <ReviewComment />
            <ReviewComment />
            <ReviewComment />
            <ReviewComment />
            <ReviewComment />
          </ReviewContentBox>
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
  grid-template-rows: 40px 1fr;
  justify-content: center;
  background: linear-gradient(#c4cef9, #facecb, #ffffff);
  padding: 40px 20px;
`;

// text
const TitleText = styled.text`
  color: ${(props) => props.color || 'gray'};
  font-family: "KOTRA_BOLD";
  font-size: ${(props) => props.size || '12px'};
`;

const InfoTitleText = styled.text`
  color: #4659A9;
  font-family: "KOTRA_GOTHIC";
  font-size: 16px;
  justify-self: flex-end;
  font-weight: 700;
`;

const InfoContentText = styled.text`
  flex: 1; 
  color: #4659A9;
  font-family: "KOTRA_GOTHIC";
  font-size: 16px;
  justify-self: flex-start;
`;

// sub container
const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  background-color: white;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0px 2px 7px #00000022;
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 5fr;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0px 2px 7px #ddd;
`;

// box
const InfoBookBox = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 200px 30px 1fr;
  gap: 5px;
`;

const InfoContentBox = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 20px;
  margin-left: 40px;
  gap: 10px;
`;

const InfoContentTextBox = styled.div`
  display: flex;
  gap: 7px;
`;

const InfoContentDetailBox = styled.div`
  display: flex;
  gap: 7px;
  margin-left: 40px;
  grid-column: 2;
  grid-row: 3;
`;

const BookImageBox = styled.div`
  display: grid;
  grid-template-rows: 200px 20px 20px;
  grid-row: auto / span 2;
  gap: 10px;
`;

const LikeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 10px
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ReviewTitleBox = styled.div`
  display: grid;
  grid-template-columns: 220px 150px 1.5fr;
  align-items: center;
`;

const ReviewContentBox = styled.div`
  display: flex;
  flex-direction: column;
`; 

const EvaluateBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
`;

// content
const ReviewTitle = styled.div`
  display: grid;
  grid-template-columns: 175px 1fr;
`;

const Button = styled.button`
  font-family: "KOTRA_GOTHIC";
  color: white;
  background-color: #4659A9;
  border-style: none;
  font-size: 14px;
  padding: 3px 20px;
  margin: 8px;
  border-radius: 50px;
`;

export default BookInfoPage;
