import { Header } from './components/containers/header/header.tsx';
import { Footer } from './components/containers/footer/footer.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />;
      <Footer />
    </>
  );
}

export default App;
