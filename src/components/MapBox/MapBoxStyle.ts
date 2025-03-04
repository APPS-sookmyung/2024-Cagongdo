import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  align-items: center;

  #map {
    width: 100%;
    height: 100%;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchNear = styled.button`
  position: absolute;
  top: 10px;
  right: 320px;

  height: 43px;

  padding: 0 15px;

  border: 0;
  border-radius: 20px;

  font-size: 14px;
  font-weight: 500;
  color: white;

  z-index: 10;

  background-color: #493a33;
  cursor: pointer;

  :hover {
    scale: 1.1;
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
