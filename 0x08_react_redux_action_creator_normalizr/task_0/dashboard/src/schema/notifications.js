import jsonData from '../../../../notifications.json';

function getAllNotificationsByUser(userId) {
  return jsonData
    .filter(jsonData => jsonData.author.id === userId).map(jsonData => jsonData.context);
}

export default getAllNotificationsByUser;