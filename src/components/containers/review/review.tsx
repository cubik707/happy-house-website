import styles from './review.module.css';
import { ReviewType } from '../main/reviews/reviews-data.ts';

type Props = {
  review: ReviewType;
};
export const Review = ({ review }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={review.imgPath} alt='' />
        <span>{review.name}</span>
      </div>
      <p className={styles.description}>{review.description}</p>
    </div>
  );
};
