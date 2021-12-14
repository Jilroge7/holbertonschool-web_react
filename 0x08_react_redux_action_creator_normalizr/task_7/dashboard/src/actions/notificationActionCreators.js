import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes.js';

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
