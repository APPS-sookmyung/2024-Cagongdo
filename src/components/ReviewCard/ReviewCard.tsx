// ReviewCard.tsx
import * as S from './ReviewCardStyle';
import { Review } from '../../types/review';

const ReviewCard: React.FC<Review> = ({
  img,
  title,
  star,
  content,
  openClose,
  location,
  hashtag,
}) => {
  return (
    <S.Container>
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
