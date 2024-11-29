import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх при каждом изменении маршрута
  }, [location]);

  return null;
};

export default ScrollToTop;
