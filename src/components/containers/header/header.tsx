import styles from './header.module.css';
import { Link } from 'react-scroll';

const navItems = [
  { text: 'Главная', to: 'introduction' },
  { text: 'Наша команда', to: 'members' },
  { text: 'Отзывы', to: 'reviews' },
  { text: 'Контакты', to: 'contact' },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerWrapper}>
          <h1 className={styles.logo}>Happy House</h1>
          <nav>
            <ul className={styles.navbar}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className={styles.navbarItem}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
