import { Header } from './components/containers/header/header.tsx';
// import { MainPage } from './pages/main-page.tsx';
import { Footer } from './components/containers/footer/footer.tsx';
import { personData } from './components/containers/personal-page/person-data.ts';
import { PersonPage } from './pages/person-page.tsx';

function App() {
  return (
    <>
      <Header />
      {/*<MainPage />*/}
      <PersonPage person={personData[0]} />
      <Footer />
    </>
  );
}

export default App;
