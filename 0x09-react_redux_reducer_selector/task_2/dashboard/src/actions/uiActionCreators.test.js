import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes.js';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure} from './uiActionCreators.js';

describe('returns correct description when action is created', () => {
  it('verifies login creates correct action with return value', () => {
    const returnData = { type: LOGIN, user : { email: 'test@test.com', password: 'passwordTest' } };
    const action = login('test@test.com', 'passwordTest')
    expect(action).toEqual(expect.objectContaining(returnData))
  });

  it('verifies logout creates correct action with return value', () => {
    const returnData = { type: LOGOUT };
    const action = logout()
    expect(action).toEqual(expect.objectContaining(returnData))
  });

  it('verifies displayNotificationDrawer creates correct action with return value', () => {
    const returnData = { type: DISPLAY_NOTIFICATION_DRAWER };
    const action = displayNotificationDrawer()
    expect(action).toEqual(expect.objectContaining(returnData))
  });

  it('verifies hideNotificationDrawer creates correct action with return value', () => {
    const returnData = { type: HIDE_NOTIFICATION_DRAWER };
    const action = hideNotificationDrawer()
    expect(action).toEqual(expect.objectContaining(returnData))
  });

  it('verifies loginSuccess creates correct action with return value', () => {
    const returnData = { type: LOGIN_SUCCESS };
    const action = loginSuccess()
    expect(action).toEqual(expect.objectContaining(returnData))
  });

  it('verifies loginSuccess creates correct action with return value', () => {
    const returnData = { type: LOGIN_FAILURE };
    const action = loginFailure()
    expect(action).toEqual(expect.objectContaining(returnData))
  });
})