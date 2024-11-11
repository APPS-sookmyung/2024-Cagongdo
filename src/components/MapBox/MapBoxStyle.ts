import exp from 'constants';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 134px);
  display: flex;
  justify-content: center;
  align-items: center;

  #map {
    width: 100%;
    height: 100%;
  }
`;

export const SearchBox = styled.input`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  width: 300px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  z-index: 10;
  border: 1px solid #000;
`;
