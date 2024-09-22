import { styled } from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
  width: 100%;
  height: 200px;
  background-color: #efefef;
  border: 1px solid #ab9f98;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  min-height: 100px;
  min-width: 100px;
  width: 100px;
  height: 100px;
  /* border: 1px solid red; */
  border-radius: 5px;
`;

export const Text = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

export const TextTop = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: start;
`;

export const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  font-weight: 700;
`;

export const Star = styled.div`
  /* border: 1px solid red; */
  font-size: 18px;
  font-weight: 500;
  /* color: gray; */
`;

export const TextBottom = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Location = styled.div`
  /* border: 1px solid red; */
  font-size: 12px;
  font-weight: 400;
  color: gray;
  display: flex;
  align-items: end;
`;

export const ReviewContent = styled.div`
  /* border: 1px solid red; */
  font-size: 12px;
  font-weight: 400;
  background-color: #fff8;
  padding: 2px 5px;
  border-radius: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Bottom = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  gap: 4px;
`;

export const Hashtag = styled.div`
  /* border: 1px solid red; */
  font-size: 13px;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: #483b33;
  color: #fff;
`;
