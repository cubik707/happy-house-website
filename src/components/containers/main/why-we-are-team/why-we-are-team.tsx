import styles from './why-we-are-team.module.css';
import flowers from '../../../../assets/flowers.png';
import { Title } from '../../../core/title/title.tsx';

export const WhyWeAreTeam = () => {
  return (
    <section id='why-we-are-team' className={styles.whyWeAreTeam}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div>
            <img
              src={flowers}
              alt={'Красивые цветы'}
              className={styles.image}
            />
          </div>
          <div className={styles.infoBlock}>
            <Title>Почему мы решили стать командой?</Title>
            <p className={styles.text}>
              Мы лучшие и близкие друзья, а поэтому действительно дополняем друг
              друга, что сильно увеличило продуктивность при составлении сайта.
              На нем представлены секции каждого автора, где можно подробно
              рассмотреть его работы и познакомиться с ним поближе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
