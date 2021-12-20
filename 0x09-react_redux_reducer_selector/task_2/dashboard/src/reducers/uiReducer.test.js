import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes.js';
import { displayNotificationDrawer } from '../actions/uiActionCreators.js';
import uiReducer, { uiReducerState } from './uiReducer.js';
import { SELECT_COURSE } from '../actions/courseActionTypes.js';
import { selectCourse } from '../actions/courseActionCreators.js';

describe('test suite for simple UI reducer', () => {
  it('verifies the state returned by uiReducer === initial state when no action passed', () => {
    const initialState = uiReducer(uiReducerState, '');
    expect(initialState).toEqual(uiReducerState);
  });
  it('verifies the state of  returned by uiReducer === initial state when selectCourse() is passed', () => {
    const initialState = uiReducer(uiReducerState, selectCourse());
    expect(initialState).toEqual(uiReducerState);
  });
  it('verifies property isNotificationDrawerVisible of  returned by uiReducer === true', () => {
    const initialState = uiReducer(uiReducerState, displayNotificationDrawer());
    expect(initialState.toJS().isNotificationDrawerVisible).toEqual(true);
  });
})