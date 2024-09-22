import * as S from './TableStyle';
import { useState, useEffect } from 'react';
import Skeleton from '../Skeleton/Skeleton';

// TableProps 인터페이스는 단일 객체가 아닌 배열을 정의해야 합니다.
interface TableRow {
  col1: string;
  col2: string;
  col3: string;
}

type TableProps = TableRow[]; // TableProps는 TableRow의 배열로 정의합니다.

const defaultData: TableProps = [
  { col1: '정민지', col2: '2022.01.30', col3: '010-1234-4721' },
  { col1: '유민아', col2: '2004.07.02', col3: '010-5118-4721' },
  { col1: '김준희', col2: '2003.03.15', col3: '010-9876-5432' },
  { col1: '박세훈', col2: '2005.11.23', col3: '010-6543-2109' },
  { col1: '이서연', col2: '2000.05.18', col3: '010-3456-7890' },
  { col1: '정하은', col2: '2002.09.09', col3: '010-4567-8901' },
  { col1: '장유리', col2: '2004.12.25', col3: '010-5678-9012' },
  { col1: '김태형', col2: '1999.04.14', col3: '010-6789-0123' },
  { col1: '이준호', col2: '2001.06.30', col3: '010-7890-1234' },
  { col1: '최지우', col2: '2003.08.22', col3: '010-8901-2345' },
  { col1: '한지민', col2: '2002.11.05', col3: '010-9012-3456' },
  { col1: '서지훈', col2: '2004.03.17', col3: '010-0123-4567' },
  { col1: '양미래', col2: '2001.07.26', col3: '010-1234-5678' },
  { col1: '문지연', col2: '2005.10.09', col3: '010-2345-6789' },
  { col1: '이민재', col2: '2000.02.20', col3: '010-3456-7890' },
];

function Table() {
  const [data, setData] = useState<TableProps>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 데이터 로딩을 시뮬레이션합니다
    setTimeout(() => {
      setData(defaultData);
      setIsLoading(false);
    }, 2000); // 2초 후 데이터 로딩 완료
  }, []);

  const handleClick = () => {
    console.log('click');
  };

  const renderTableContent = () => {
    return (isLoading ? Array(15).fill(null) : data).map((row, index) => (
      <S.StyledTr key={isLoading ? `skeleton-${index}` : row.col1}>
        <S.StyledTd>
          {isLoading ? <Skeleton width="80px" height="20px" /> : row.col1}
        </S.StyledTd>
        <S.StyledTd>
          {isLoading ? <Skeleton width="120px" height="20px" /> : row.col2}
        </S.StyledTd>
        <S.StyledTd>
          {isLoading ? <Skeleton width="100px" height="20px" /> : row.col3}
        </S.StyledTd>
      </S.StyledTr>
    ));
  };

  return (
    <S.StyledTable>
      <thead>
        <S.StyledTr>
          <S.StyledTh>이름</S.StyledTh>
          <S.StyledTh>생년월일</S.StyledTh>
          <S.StyledTh>전화번호</S.StyledTh>
        </S.StyledTr>
      </thead>
      <S.StyledTbody>
        {renderTableContent()}
      </S.StyledTbody>
    </S.StyledTable>
  );
}

export default Table;
