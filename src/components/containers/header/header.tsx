import styles from './header.module.css';

const navItems = [
  { text: 'Главная', href: '#' },
  { text: 'Наша команда', href: '#' },
  { text: 'Отзывы', href: '#' },
  { text: 'Контакты', href: '#' },
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
                  <a className={styles.navbarItem} href={item.href}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
