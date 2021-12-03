import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '', 
      password: '',
      enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({isLoggedIn: true});
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value},
      () => {
        this.state.email !== '' && this.state.password !== ''
          ? this.setState({enableSubmit: true})
          : this.setState({enableSubmit: false})
      }
    )
  }

  handleChangePassword() {
   this.setState({ password: event.target.value},
     () => {
        this.state.email !== '' && this.state.password !== ''
          ? this.setState({enableSubmit: true})
          : this.setState({enableSubmit: false})
      }
    )
  }


  render() {
    const {isLoggedIn, email, password, enableSubmit} = this.state;
    return (
      <body className={css(styles.appBody, styles.under)}>
        <p>
        Login to access the full dashboard
        </p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">
            Email: </label>
          <input 
            type="email"
            id="email"
            className={css(styles.noBox)}
            name="email"
            value={email}
            onChange={this.handleChangeEmail} />
          <label htmlFor="password">
            Password: </label>
          <input
            type="password"
            id="password"
            className={css(styles.noBox)}
            name="password"
            value={password}
            onChange={this.handleChangePassword} />
          <input
            type="submit"
            className={css(styles.button)}
            value="OK"
            disabled={!enableSubmit} />
        </form>
      </body>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '3.5rem',
    marginLeft: '2.5rem',
    minHeight: '50vh',
  },
  under: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center'
    }
  },

  noBox: {
    '@media (max-width: 900px)': {
      border: 'none',
    }
  },

  button: {
    '@media (max-width: 900px)': {
      border: '4px solid gold',
      backgroundColor: 'transparent',
      width: '5vw'
    }
  }
});

export default Login;
