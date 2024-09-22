// ReviewList.tsx
import * as S from './ReviewListStyle';
import { Review } from '../../types/review';
import ReviewCard from '../ReviewCard/ReviewCard';
import cafeImg from '../../assets/imgs/cafeImg.png';

const reviewList: Review[] = [
  {
    img: cafeImg,
    title: '카페 이름 1',
    star: 3.5,
    content: '카페 설명 1',
    openClose: '10:00~20:00',
    location: '서울특별시 강남구 강남대로 123',
    hashtag: ['카페', '디저트', '빵'],
  },
  {
    img: cafeImg,
    title: '카페 이름 2',
    star: 3.5,
    content: '카페 설명 1',
    openClose: '10:00~20:00',
    location: '서울특별시 강남구 강남대로 123',
    hashtag: ['카페', '디저트', '빵'],
  },
  {
    img: cafeImg,
    title: '카페 이름 3',
    star: 3.5,
    content: '카페 설명 1',
    openClose: '10:00~20:00',
    location: '서울특별시 강남구 강남대로 123',
    hashtag: ['카페', '디저트', '빵'],
  },
  {
    img: cafeImg,
    title: '카페 이름 4',
    star: 3.5,
    content: '카페 설명 1',
    openClose: '10:00~20:00',
    location: '서울특별시 강남구 강남대로 123',
    hashtag: ['카페', '디저트', '빵'],
  },
];

const ReviewList: React.FC = () => {
  return (
    <S.Container>
      {reviewList.map((review: Review) => (
        <ReviewCard key={review.title} {...review} />
      ))}
    </S.Container>
  );
};

export default ReviewList;
