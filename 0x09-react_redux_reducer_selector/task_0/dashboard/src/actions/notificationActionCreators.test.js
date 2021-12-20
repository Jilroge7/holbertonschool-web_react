import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes.js';
import { markAsRead, setNotificationFilter } from './notificationActionCreators.js';

describe('verifying action creators', () => {
  it('returns correct info when creating markAsRead', () => {
    const returnData = {
      type: MARK_AS_READ,
      index: 1
    };
    const action = markAsRead(1);
    expect(action).toEqual(expect.objectContaining(returnData))
  });

  it('returns correct info when creating setNotificationFilter', () => {
    const returnData = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    };
    const action = setNotificationFilter('DEFAULT');
    expect(action).toEqual(expect.objectContaining(returnData))
  });
})