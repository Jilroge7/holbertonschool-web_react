import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function Footer() {
  return (
    <div className="App">
      <hr className="hr" />
      <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  );
}

export default Footer;
