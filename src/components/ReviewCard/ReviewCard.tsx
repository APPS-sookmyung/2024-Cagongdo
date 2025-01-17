import React from 'react';
import * as S from './ReviewCardStyle';
import { Review } from '../../types/review';

interface ReviewCardProps extends Review {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>; // 모달 열기 상태 함수
  // setSelectedReview: React.Dispatch<React.SetStateAction<Review | null>>; // 선택된 리뷰 정보
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  img,
  title,
  star,
  content,
  openClose,
  location,
  hashtag,
  setIsModalOpen,
  // setSelectedReview,
}) => {
  // 카드 클릭 시 모달 열기 및 선택된 리뷰 정보 설정
  const handleCardClick = () => {
    // setSelectedReview({
    //   img,
    //   title,
    //   star,
    //   content,
    //   openClose,
    //   location,
    //   hashtag,
    // });
    setIsModalOpen(true); // 모달 열기
  };

  return (
    <S.Container onClick={handleCardClick}>
      <S.Top>
        <S.Image src={img} alt={title} />
        <S.Text>
          <S.TextTop>
            <S.Title>{title}</S.Title>
            <S.Star>{`${'☕️'.repeat(Math.floor(star))}`}</S.Star>
          </S.TextTop>
          <S.TextBottom>
            <S.Location>{location}</S.Location>
            <S.ReviewContent>
              {content}, {openClose}
            </S.ReviewContent>
          </S.TextBottom>
        </S.Text>
      </S.Top>
      <S.Bottom>
        {hashtag.map((tag, index) => (
          <S.Hashtag key={`${tag}-${index}`}>#{tag}</S.Hashtag>
        ))}
      </S.Bottom>
    </S.Container>
  );
};

export default ReviewCard;
