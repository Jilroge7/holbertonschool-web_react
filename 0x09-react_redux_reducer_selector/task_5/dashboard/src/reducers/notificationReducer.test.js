import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes.js';
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from '../actions/notificationActionCreators.js';
import notificationReducer, { notificationReducerState } from './notificationReducer.js';

describe('test suite for notifications reducer', () => {
  it('verifies that default state returns === initialstate', () => {
    const initialState = {
      notifications: [],
      filter: "DEFAULT"
    }
    const defaultState = notificationReducer(notificationReducerState, '');
    expect(defaultState).toEqual(initialState); 
  });
  it('verifies mark as read returns the data passed', () => {
    const notificationReducerState = [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    const data = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    }
    const initialState = notificationReducer(notificationReducerState, markAsRead(2));
    expect(initialState).toEqual(data);
  });
})