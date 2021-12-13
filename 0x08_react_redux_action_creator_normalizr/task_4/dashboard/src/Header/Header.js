import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import { AppContext } from '../App/AppContext.js';

class Header extends React.Component {
  render() {
    let value = this.context;
    return (
      <>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h1 className={css(styles.title)}>
            School dashboard
          </h1>
          { value.user.isLoggedIn
            ? <section id='logoutSection'>Welcome {value.user.email} <a onClick={value.logOut}>(logout)</a></section>
            : null
          }
        </header>
      </>
    );
  }
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

Header.contextType = AppContext;
export default Header;

