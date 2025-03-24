import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ children, disablePaddingBottom = false }) => {
  return (
    <>
      <Header />
      <main
        className={`${styles.main} ${
          disablePaddingBottom ? styles.disablePaddingBottom : ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disablePaddingBottom: PropTypes.bool,
};

export default Layout;
