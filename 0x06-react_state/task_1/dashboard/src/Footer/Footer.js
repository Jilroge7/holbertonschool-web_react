import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function Footer() {
  return (
    <>
      <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </>
  );
}

export default Footer;
