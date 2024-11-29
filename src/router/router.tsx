import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/main-page.tsx';
import { PersonPage } from '../pages/person-page.tsx';
import { personData } from '../components/containers/personal-page/person-data.ts';
import ScrollToTop from '../components/core/scroll-to-top/scroll-to-top.tsx';
import { Layout } from './layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: '/vlad',
    element: (
      <Layout>
        <ScrollToTop />
        <PersonPage person={personData[0]} />
      </Layout>
    ),
  },
  {
    path: '/vlada',
    element: (
      <Layout>
        <ScrollToTop />
        <PersonPage person={personData[1]} />
      </Layout>
    ),
  },
  {
    path: '/ira',
    element: (
      <Layout>
        <ScrollToTop />
        <PersonPage person={personData[2]} />
      </Layout>
    ),
  },
]);
