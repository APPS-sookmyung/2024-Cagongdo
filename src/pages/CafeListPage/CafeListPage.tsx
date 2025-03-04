import { useState } from 'react';
import Header from '../../components/Header/Header';
import ReviewList from '../../components/ReviewList/ReviewList';
import TabBar from '../../components/TabBar/TabBar';
import * as S from './CafeListPageStyle';

const CafeListPage: React.FC = () => {
  // 모달 상태와 선택된 리뷰 정보를 상태로 관리
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <>
      <S.Container>
        <Header />
        <ReviewList
          setIsModalOpen={setIsModalOpen}
          // setSelectedReview={setSelectedReview} // 선택된 리뷰를 부모에서 관리
        />
        <TabBar />
      </S.Container>

      {/* 선택된 리뷰가 있을 때만 모달을 렌더링 */}
      {/* {isModalOpen && (
        // selectedReview &&
        <ReviewModal
          // review={selectedReview}
          setIsModalOpen={setIsModalOpen}
        />
      )} */}
    </>
  );
};

export default CafeListPage;
