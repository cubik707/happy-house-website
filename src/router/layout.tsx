import { Header } from '../components/containers/header/header.tsx';
import { Footer } from '../components/containers/footer/footer.tsx';
import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
