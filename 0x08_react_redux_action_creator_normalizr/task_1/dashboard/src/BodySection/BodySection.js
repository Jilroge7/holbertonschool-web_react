import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


const BodySection = ({ title, children }) => {
  return (
    <div className={css(styles.under)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  under: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center',
      width: '50%',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

export default BodySection
