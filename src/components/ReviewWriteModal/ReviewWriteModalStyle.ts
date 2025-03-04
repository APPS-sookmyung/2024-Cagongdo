import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 100px; /* 전체 높이에서 54px 빼고, 남은 공간의 가운데 */
  left: 460px; /* 왼쪽에서 600px 떨어진 곳에 배치 */

  display: flex;
  color: #493a33;

  border: 2px solid #493a33;
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  background-color: #fff3ec;

  z-index: 100;
  /* border: 1px solid blue; */
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  width: 600px;
  height: 80vh;

  padding: 20px;
`;

export const Title = styled.h1`
  /* border: 1px solid green; */
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin: 2px;

  padding-bottom: 10px;

  border-bottom: 2px solid #493a33;

  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
`;

export const Button = styled.button`
  padding: 3px 10px;

  border: 0;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;
  color: white;

  background-color: #493a33;
`;

export const Content = styled.h1`
  /* border: 1px solid green; */
  padding-top: 10px;
`;

export const FormField = styled.form`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Label = styled.label`
  /* border: 1px solid green; */

  display: flex;
  flex-direction: column;

  font-weight: 600;
`;

export const Input = styled.input`
  height: 34px;

  padding: 10px;

  border: 1px solid #493a33;
  border-radius: 10px;
  outline: none;

  font-size: 14px;
  font-weight: 400;
`;

export const Textarea = styled.textarea`
  height: 80px;

  padding: 10px;

  border: 1px solid #493a33;
  border-radius: 10px;
  outline: none;

  font-size: 14px;
  font-weight: 400;
`;
