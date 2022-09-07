import React from 'react';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import logo from '/src/assets/codeleap-logo-black.svg';

export const Homepage = () => {
  return (
    <section className={styles.background}>
      <img
        className={styles.codeleapLogo}
        src={logo}
        alt='logo codeleap preto'
      />
      <Link className={styles.accessButton} to='/signup'>
        begin
      </Link>
    </section>
  );
};
