import { ProjectType } from '../person-data.ts';
import { Title } from '../../../core/title/title.tsx';
import styles from './project.module.css';

type Props = ProjectType & { isOdd: boolean }; // Добавляем проп isOdd

export const Project = ({ name, photo, description, isOdd }: Props) => {
  return (
    <section className={styles.projectInfo}>
      <div className={'container'}>
        <div
          className={`${styles.wrapper} ${
            isOdd ? styles.odd : styles.even // Применяем класс в зависимости от isOdd
          }`}
        >
          <img src={photo} alt='' />
          <div className={styles.info}>
            <Title>{name}</Title>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
