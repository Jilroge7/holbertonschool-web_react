import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes.js';
import fetch from 'node-fetch';


export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email: email,
      password: password
    },
  };
}

export const logout = (email, password) => {
  return {
    type: LOGOUT,
  };
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
}

//export const loginRequest = (email, password) => {
// fetch('../../dist/login-success.json')
    .then
//}
