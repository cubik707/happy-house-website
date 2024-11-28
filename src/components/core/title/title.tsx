import React from 'react';
import styles from './title.module.css';

type Props = {
  children: React.ReactNode;
  margin?: string;
};

export const Title = ({ children, margin }: Props) => {
  return (
    <h2 className={styles.title} style={{ margin }}>
      {children}
    </h2>
  );
};
