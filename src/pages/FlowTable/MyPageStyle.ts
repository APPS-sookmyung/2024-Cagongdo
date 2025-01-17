import styled, { keyframes } from 'styled-components';

const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0); 
  }
`;

const flowingReverse = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0); 
  }
`;

// 스타일드 컴포넌트 정의
export const Container = styled.div`
  box-sizing: border-box;
  padding: 100px 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const AnimationLayout = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  animation: ${flowing} 20s linear infinite;
`;

export const AnimationLayoutReverse = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  animation: ${flowingReverse} 20s linear infinite;
`;

export const FlowBox = styled.div`
  border: 1px solid red;
  width: 300px; // 고정된 너비
  height: 200px;
  flex-shrink: 0; // 카드가 줄어들지 않도록 설정
`;
