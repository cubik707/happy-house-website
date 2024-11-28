import normis from '../../../../assets/members/normis.png';
import palitra from '../../../../assets/members/palitra.png';
import pickme from '../../../../assets/members/pickme.png';
import { Title } from '../../../core/title/title.tsx';
import styles from './members.module.css';

export const Members = () => {
  return (
    <section className={styles.membersSection}>
      <div className={'container'}>
        <div className={styles.wrapper}>
          <Title>Выбери своего бойца</Title>
          <div className={styles.memberContainer}>
            <div className={styles.member}>
              <img src={palitra} alt={'Демидовец Влада'} />
              <span>Демидовец Влада</span>
            </div>
            <div className={styles.member}>
              <img src={normis} alt={'Кравченко Влад'} />
              <span>Кравченко Влад</span>
            </div>
            <div className={styles.member}>
              <img src={pickme} alt={'Гребень Ирина'} />
              <span>Гребень Ирина</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
