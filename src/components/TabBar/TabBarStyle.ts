import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #483b33;
  position: fixed;
  bottom: 0;
`;
export const TabContainer = styled.div`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const IconBox = styled.div`
padding: 15px 0;
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0;
`;

export const IconImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const Text = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`;
