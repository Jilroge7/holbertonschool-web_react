const { fromJS } =  require('immutable');

function getImmutableObject(object) {
  const immutableObj = fromJS(object);
  return (immutableObj);
}

const random = {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}

getImmutableObject(random);
module.exports = getImmutableObject;