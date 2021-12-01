import { fromJS, getIn } from 'immutable';

function accessImmutableObject(object, array) {
  const immutableObj = fromJS(object);
  const nestedVal = immutableObj.getIn(array);
  return (nestedVal);
};

module.exports = accessImmutableObject;
