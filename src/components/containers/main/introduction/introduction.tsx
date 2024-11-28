import introduction from '../../../../assets/introduction.png';
import styles from './introduction.module.css';

export const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className='container'>
        <div className={styles.wrapper}>
          <img src={introduction} alt={introduction} />
        </div>
      </div>
    </section>
  );
};
