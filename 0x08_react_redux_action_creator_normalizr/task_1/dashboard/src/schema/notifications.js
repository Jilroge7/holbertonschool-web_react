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
  return jsonData
    .filter(jsonData => jsonData.author.id === userId).map(jsonData => jsonData.context);
}