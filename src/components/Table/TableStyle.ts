import { styled } from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: 800px; /* 높이를 설정하여 스크롤을 적용할 공간 확보 */
  border: 3px solid gray;
  overflow: hidden; /* 전체 테이블에 대한 스크롤을 숨깁니다 */
  border-radius: 20px; /* 테두리 둥글게 설정 */
`;

export const StyledTbody = styled.tbody`
  box-sizing: border-box;
  display: block;
  height: 100%; /* 부모 요소의 높이에 맞게 설정 */
  overflow-y: auto; /* 세로 스크롤을 추가 */
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid red;
`;

export const StyledTr = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

export const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  height: 80px;
`;
