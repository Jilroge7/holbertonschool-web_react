const { List, Map } = require('immutable');

function concatElements(page1, page2) {
  const pageOne = List(page1);
  const pageTwo = List(page2);
  const pageList = pageOne.concat(pageTwo);
  return (pageList);
}

function mergeElements(page1, page2) {
  const pageOne = Map(page1);
  const pageTwo = Map(page2);
  const pageList = pageOne.merge(pageTwo);
  return (pageList);
}

module.exports = { concatElements, mergeElements};
