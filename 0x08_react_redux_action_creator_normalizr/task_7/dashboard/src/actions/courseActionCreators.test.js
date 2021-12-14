import { selectCourse, unSelectCourse } from './courseActionCreators.js';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js';

describe('verifies the action creators return correct values', () => {
  it('returns correct value when selectCourses action is created', () => {
    const returnData = { type: SELECT_COURSE, index: 1 }
    const action = selectCourse(1);
    expect(action).toEqual(expect.objectContaining(returnData));
  });

  it('returns correct value when unSelectCourses action is created', () => {
    const returnData = { type: UNSELECT_COURSE, index: 1 }
    const action = unSelectCourse(1);
    expect(action).toEqual(expect.objectContaining(returnData));
  });
})