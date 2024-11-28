import { Title } from '../../../core/title/title.tsx';
import styles from './reviews.module.css';
import { Review } from '../../review/review.tsx';
import { reviewsData } from './reviews-data.ts';

export const Reviews = () => {
  return (
    <section className={styles.reviewsSection}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Title>Отзывы</Title>
          <div className={styles.reviewList}>
            {reviewsData.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
