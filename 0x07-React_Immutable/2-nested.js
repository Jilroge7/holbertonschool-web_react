import { fromJS, getIn } from 'immutable';

function accessImmutableObject(object, array) {
  const immutableObj = fromJS(object);
  const nestedVal = getIn(immutableObj, array);
  return (nestedVal);
}

module.exports = accessImmutableObject;
