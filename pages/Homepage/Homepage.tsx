import React from 'react';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';

const codeleapLogo = '../../src/assets/codeleap-logo-black.svg';

export const Homepage = () => {
  return (
    <section className={styles.wrapper}>
      <img
        className={styles.codeleapLogo}
        src={codeleapLogo}
        alt='logo codeleap preto'
      />
      <Link className={styles.accessMessage} to='/access'>
        begin
      </Link>
    </section>
  );
};
