import { PersonData } from '../person-data.ts';
import styles from './person-info.module.css';
import { Title } from '../../../core/title/title.tsx';

type Props = Omit<
  PersonData,
  'coreldrawProjects' | 'photoshopProjects' | 'flashProjects'
>;
export const PersonInfo = ({ name, photo, description }: Props) => {
  return (
    <section className={styles.personInfo}>
      <div className={'container'}>
        <div className={styles.wrapper}>
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
