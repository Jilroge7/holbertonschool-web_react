import jsonData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users')
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
})
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
})

export const normlizr = normalize(jsonData, [notification])

export function getAllNotificationsByUser(userId) {
  const notificationArr = []
  const messages = normlizr.entities.messages;
  const notifications = normlizr.entities.notifications;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      notificationArr.push(messages[notifications[id].context])
    }
  }
  return notificationArr;
}