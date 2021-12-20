import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import { AppContext } from '../App/AppContext.js';

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user: { email, password, isLoggedIn }, logOut }) => (
          <footer className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy(true)}
            { isLoggedIn && (
              <p><a>Contact Us</a></p>
            )}  
          </footer>
      )}    
    </AppContext.Consumer>
  );
}

export default Footer;
