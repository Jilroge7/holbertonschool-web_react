const { Map } = require('immutable');
import { 
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/uiActionTypes.js';

export const uiReducerState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
})

export default function uiReducer(state = uiReducerState, action) {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER': {
      return state.set('isNotificationDrawerVisible', true)
    }
    case 'HIDE_NOTIFICATION_DRAWER': {
      return state.set('isNotificationDrawerVisible', false)
    }
    case 'LOGIN_SUCCESS': {
      return state.set('isUserLoggedIn', true)
    }
    case 'LOGIN_FAILURE': {
      return state.set('isUserLoggedIn', false)
    }
    case 'LOGOUT': {
      return state.set('isUserLoggedIn', false)
    }
    default:
      return state
  } 
}