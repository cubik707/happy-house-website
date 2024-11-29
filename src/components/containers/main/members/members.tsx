import normis from '../../../../assets/members/normis.png';
import palitra from '../../../../assets/members/palitra.png';
import pickme from '../../../../assets/members/pickme.png';
import { Title } from '../../../core/title/title.tsx';
import styles from './members.module.css';
import { useNavigate } from 'react-router-dom';

export const Members = () => {
  const navigate = useNavigate();
  const handlerOnClickVlad = () => {
    navigate('/vlad');
  };
  const handlerOnClickVlada = () => {
    navigate('/vlada');
  };
  const handlerOnClickIra = () => {
    navigate('/ira');
  };

  return (
    <section id='members' className={styles.membersSection}>
      <div className={'container'}>
        <div className={styles.wrapper}>
          <Title>Выбери своего бойца</Title>
          <div className={styles.memberContainer}>
            <div className={styles.member}>
              <img
                onClick={handlerOnClickVlada}
                src={palitra}
                alt={'Демидовец Влада'}
              />
              <span onClick={handlerOnClickVlada}>Демидовец Влада</span>
            </div>
            <div className={styles.member}>
              <img
                onClick={handlerOnClickVlad}
                src={normis}
                alt={'Кравченко Влад'}
              />
              <span onClick={handlerOnClickVlad}>Кравченко Влад</span>
            </div>
            <div className={styles.member}>
              <img
                onClick={handlerOnClickIra}
                src={pickme}
                alt={'Гребень Ирина'}
              />
              <span onClick={handlerOnClickIra}>Гребень Ирина</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
