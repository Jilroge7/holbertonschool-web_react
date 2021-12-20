import React, { createContext } from 'react';

export const userDefault = {
  email: '',
  password: '',
  isLoggedIn: false
}

export const logOutDefault = () => {}

export const AppContext = React.createContext({
  user: userDefault,
  logOut: logOutDefault,
})