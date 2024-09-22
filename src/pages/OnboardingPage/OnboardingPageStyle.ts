import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// 스타일드 컴포넌트 정의
export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
`;

// 스타일드 컴포넌트 정의
export const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  /* border: 1px solid blue; */
`;

// 스타일드 컴포넌트 정의
export const LoginButton = styled(Link)`
  width: 100%;
  max-width: 300px;
  height: 50px;
  /* border: 1px solid black; */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #483B33;
  text-decoration: none;

  &:hover {
    background-color: #A88A77;
  }
`;
