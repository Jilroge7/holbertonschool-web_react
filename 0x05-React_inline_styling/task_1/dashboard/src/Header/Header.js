import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <>
      <header style={css(styles.appHeader)}>
        <img src={logo} style={css(styles.appLogo)} alt="logo" />
        <h1 style={css(styles.title)}>
          School dashboard
        </h1>
      </header>
      <hr style={css(styles.hr)} />
    </>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)'
  },

  appLogo: {
    height: '30vmin,
    pointerEvents: 'none'
  },

  title: {
    color: '#ec4242'
  },

  hr: {
    borderTop: '3.5px solid #ec4242'
  }
});
export default Header;
