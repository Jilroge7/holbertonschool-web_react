const { List } = require ('immutable');

function getListObject(array) {
  const listObj = List(array);
  return(listObj);
}

function addElementToList(list, element) {
  const newList = list.push(element);
  return (newList);
}

module.exports = { getListObject, addElementToList };