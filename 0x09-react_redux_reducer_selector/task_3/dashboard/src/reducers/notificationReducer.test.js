import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes.js';
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from '../actions/notificationActionCreators.js';
import notificationReducer, { notificationReducerState } from './notificationReducer.js';

describe('test suite for notifications reducer', () => {
  it('verifies that default state returns === initialstate', () => {
    const initialState = {
      notifications: [],
      filter: "DEFAULT" | "URGENT"
    }
    const defaultState = notificationReducer(notificationReducerState, '');
    expect(defaultState).toEqual(initialState); 
  });
  it('verifies fetch notifications success returns the data passed', () => {
    const data = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    }
    const initialState = notificationReducer(notificationReducerState, fetchNotificationsSuccess());
    expect(initialState).toEqual(data);
  });