import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import React from 'react';


function Header() {
  return (
    <>
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.title)}>
          School dashboard
        </h1>
      </header>
    </>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    '@media (max-width: 900px)': {
      justifyContent: 'center',
    }
  },

  appLogo: {
    height: '30vmin',
    pointerEvents: 'none'
  },

  title: {
    color: '#ec4242'
  },
});

export default Header;
