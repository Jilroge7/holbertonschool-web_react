import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes.js';
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from '../actions/notificationActionCreators.js';

export const notificationReducerState = {
  notifications: [],
  filter: "DEFAULT"
}

export function noticationReducer(state = notificationReducerState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return action.data.map((attribute) => ({
        filter: attribute.filter,
        notifications: [
          {
            id: attribute.id,
            isRead: false,
            type: attribute.type,
            value: attribute.value
          }
        ]
      }))
    }
    case MARK_AS_READ: {
      return state.map((attribute) => {
        if (attribute.id === action.index) {
          return {
            ...attribute,
            isRead: true
          }
        }
        return { ...attribute }
      })
    }
    case SET_TYPE_FILTER: {
      return state.map((attribute) => {
        return {
          ...attribute,
          filter: action.filter
        }
      })
    }
    default:
      return state
  }
}
