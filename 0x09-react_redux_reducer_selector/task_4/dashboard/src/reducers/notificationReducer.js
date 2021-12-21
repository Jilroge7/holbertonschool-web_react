import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes.js';
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from '../actions/notificationActionCreators.js';
import { Map } from 'immutable';

export const notificationReducerState = Map({
  notifications: [],
  filter: "DEFAULT"
})

export default function notificationReducer(state = notificationReducerState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = action.data.map((attribute) => ({
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
      const normalizData = notificationsNormalizer(data)
      return state.merge(normalizData)
    }
    case MARK_AS_READ: {
      return { state.set('MARK_AS_READ', true)
      }
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
