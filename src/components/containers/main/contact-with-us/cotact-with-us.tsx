import styles from './cotact-with-us.module.css';
import { Title } from '../../../core/title/title.tsx';
import { Button } from '../../../core/button/button.tsx';
import mail from '../../../../assets/mail.png';

export const CotactWithUs = () => {
  return (
    <section id='contact' className={styles.contactWithUs}>
      <div className={'container'}>
        <div className={styles.wrapper}>
          <Title>Свяжитесь с нами</Title>
          <p className={styles.text}>
            Если вам кажется, что мы очень крутые, и вы хотите воспользоваться
            нашими услугами, то свяжитесь с нами <br /> o(〃＾▽＾〃)o
          </p>
          <Button
            type={'button'}
            height={'57px'}
            onClick={() => alert('Спасибо, что связались с нами :3')}
            icon={mail}
          >
            happyhouse@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
};
