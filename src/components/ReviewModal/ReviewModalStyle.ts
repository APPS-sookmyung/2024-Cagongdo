import { styled } from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  color: #493a33;
`;

export const Container = styled.div`
  width: 100vw;
  max-width: 400px;
  height: calc(100vh - 54px);
  overflow-y: auto;
  background: #fff;
  display: flex;
  position: fixed;
  top: 54px;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 0 20px 0;
`;

export const Body = styled.div`
  width: 100%;
  margin: 0;
  background-color: white;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin: 2px;
  line-height: 100%;
`;

export const CloseBtnContainer = styled.div`
  width: 100%;
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 16px;
  font-weight: 700;
  margin: 4px;
  line-height: 100%;
  color: #fff;
  /* border: 1px solid red; */
  width: 30px;
  height: 30px;
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  position: relative;
`;

export const ImageShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
`;

export const MainImageContainer = styled.div`
  width: 100%;

  overflow: hidden;
`;

export const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const AdditionalImagesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  aspect-ratio: 1 / 1;
  gap: 2px;
`;

export const AdditionalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const Location = styled.p`
  font-size: 14px;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const ReviewWrite = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #493a33;
  cursor: pointer;
  text-decoration: underline;
`;

export const Star = styled.p`
  /* border: 1px solid red; */
`;

export const Time = styled.p`
  /* border: 1px solid red; */
`;

export const OpenClose = styled.p`
  /* border: 1px solid red; */
`;

export const DetailOptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  /* border: 1px solid red; */
`;

export const DetailOption = styled.div`
  /* border: 1px solid #493a33; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  color: #fff;
  /* background-color: #493a33; */
  opacity: 0.8;
  padding: 6px 0 14px 0;
  color: #493a33;
`;

export const DetailOptionIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const DetailOptionDescription = styled.p`
  font-size: 10px;
  font-weight: 400;
  /* color: rgba(255, 255, 255, 0.6); */
  padding-top: 2px;
`;

export const DetailOptionValue = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  /* border: 1px solid blue; */
`;

export const InfoLeft = styled.div`
  /* border: 1px solid red; */
  border-right: 1px solid #493a33;
  font-weight: 500;
  padding: 14px 14px 14px 0;
`;

export const InfoRight = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 14px 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #493a33;
`;

export const ReviewContentContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ReviewContent = styled.p`
  /* border: 1px solid #483b33; */
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background-color: rgb(255, 243, 236);
`;

export const ReviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 8px;
`;

export const ReviewImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ReviewText = styled.p`
  font-size: 14px;
`;

export const ReviewHashtagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ReviewHashtag = styled.p`
  font-size: 12px;
  color: rgb(140, 120, 111);
`;
