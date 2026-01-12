import * as React from 'react';
import { Link } from 'gatsby';
import Header from './Header';
import * as styles from '../styles/layout.module.scss';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
