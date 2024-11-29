import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { text: 'Главная', to: 'introduction' },
  { text: 'Наша команда', to: 'members' },
  { text: 'Отзывы', to: 'reviews' },
  { text: 'Контакты', to: 'contact' },
];

export const Header = () => {
  const navigate = useNavigate();

  // Функция для навигации на главную страницу и прокрутки до нужного элемента
  const handleNavigation = (to: string) => {
    // Переходим на главную страницу
    navigate('/', { replace: true });

    // Прокручиваем к нужному элементу после перехода
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Ожидаем немного, чтобы компонент успел отрендериться
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerWrapper}>
          <h1 className={styles.logo}>Happy House</h1>
          <nav>
            <ul className={styles.navbar}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    className={styles.navbarItem}
                    onClick={() => handleNavigation(item.to)}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
