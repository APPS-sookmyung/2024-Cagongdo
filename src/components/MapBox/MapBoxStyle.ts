import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 134px);
  display: flex;
  justify-content: center;
  align-items: center;

  .map {
    width: 100%;
    height: 100%;
  }
`;

export const CurrentPosBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background-color: #483b33;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  z-index: 10;
`;
