import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes.js';

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index: index,
  };
}

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: "DEFAULT"
  };
}

export const fetchNotificationsSuccess = () => {
  return {
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
  };
}
