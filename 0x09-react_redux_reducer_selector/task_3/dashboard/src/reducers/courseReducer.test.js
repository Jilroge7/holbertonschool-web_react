import { FETCH_COURSE_SUCCESS, UNSELECT_COURSE, SELECT_COURSE } from '../actions/courseActionTypes.js';
import { selectCourse, unSelectCourse, fetchCourseSuccess } from '../actions/courseActionCreators.js';
import courseReducer, { courseReducerState } from './courseReducer.js';

describe('test suite for course reducer', () => {
  it('verifies that default state returns an empty array', () => {
    const initialState = courseReducer(courseReducerState, '');
    expect(initialState).toEqual([]); 
  });
  it('verifies fetch course success returns the data passed', () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
    const initialState = courseReducer(courseReducerState, fetchCourseSuccess());
    expect(initialState).toEqual(data);
  });
  it('verifies select course returns with correct item updated', () => {
    const courseReducerState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
    const data = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
    const initialState = courseReducer(courseReducerState, selectCourse(2));
    expect(initialState).toEqual(data);
  });
  it('verifies unselect course returns with correct item updated', () => {
    const courseReducerState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
    const data = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
    const initialState = courseReducer(courseReducerState, unSelectCourse(2));
    expect(initialState).toEqual(data);
  });
})