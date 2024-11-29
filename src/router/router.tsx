import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/main-page.tsx';
import { PersonPage } from '../pages/person-page.tsx';
import { personData } from '../components/containers/personal-page/person-data.ts';
import ScrollToTop from '../components/core/scroll-to-top/scroll-to-top.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/vlad',
    element: (
      <>
        <ScrollToTop />
        <PersonPage person={personData[0]} />
      </>
    ),
  },
  {
    path: '/vlada',
    element: (
      <>
        <ScrollToTop />
        <PersonPage person={personData[1]} />
      </>
    ),
  },
  {
    path: '/ira',
    element: (
      <>
        <ScrollToTop />
        <PersonPage person={personData[2]} />
      </>
    ),
  },
]);
