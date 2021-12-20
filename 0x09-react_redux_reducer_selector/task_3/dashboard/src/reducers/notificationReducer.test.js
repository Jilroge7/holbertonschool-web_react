import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes.js';
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from '../actions/notificationActionCreators.js';
import notificationReducer, { notificationReducerState } from './notificationReducer.js';