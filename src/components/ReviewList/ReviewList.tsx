import * as S from './ReviewListStyle';
import { Review } from '../../types/review';
import ReviewCard from '../ReviewCard/ReviewCard';
import cafeImg from '../../assets/imgs/cafeImg.png';

const reviewList: Review[] = [
  {
    img: cafeImg,
    title: '청파맨션',
    location: '서울 용산구 청파로47나길 20',
    star: 4.5,
    openClose: '08:30 ~ 19:00',
    content: '음료가 맛있고 잔잔한 분위기라 카공하기 좋아요',
    hashtag: ['음료맛집', '사장님친절', '분위기좋음'],
  },

  // {
  //   img: cafeImg,
  //   title: '카페 이름 2',
  //   star: 3.5,
  //   content: '카페 설명 2',
  //   openClose: '10:00~20:00',
  //   location: '서울특별시 강남구 강남대로 124',
  //   hashtag: ['카페', '디저트', '빵'],
  // },
  // {
  //   img: cafeImg,
  //   title: '카페 이름 3',
  //   star: 4.0,
  //   content: '카페 설명 3',
  //   openClose: '09:00~22:00',
  //   location: '서울특별시 강남구 강남대로 125',
  //   hashtag: ['카페', '디저트', '음악'],
  // },
  // {
  //   img: cafeImg,
  //   title: '카페 이름 4',
  //   star: 4.5,
  //   content: '카페 설명 4',
  //   openClose: '08:00~23:00',
  //   location: '서울특별시 강남구 강남대로 126',
  //   hashtag: ['카페', '디저트', '빵'],
  // },
];

interface ReviewListProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setSelectedReview: React.Dispatch<React.SetStateAction<Review | null>>;
}

const ReviewList: React.FC<ReviewListProps> = ({
  setIsModalOpen,
  // setSelectedReview,
}) => {
  return (
    <S.Container>
      {reviewList.map((review: Review) => (
        <ReviewCard
          key={review.title}
          {...review}
          setIsModalOpen={setIsModalOpen} // 모달 열기 함수 전달
        />
      ))}
    </S.Container>
  );
};

export default ReviewList;
