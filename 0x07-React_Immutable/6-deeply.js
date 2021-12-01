const { Map } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  const pageOne = Map(page1);
  const pageTwo = Map(page2);
  return (pageOne.mergeDeep(pageTwo));
}

module.exports = mergeDeeplyElements;