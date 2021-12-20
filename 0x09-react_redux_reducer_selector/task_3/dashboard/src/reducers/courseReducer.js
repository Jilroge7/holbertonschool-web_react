import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes.js';

const courseReducerState = []

export default function courseReducer(state = courseReducerState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      return action.data.map((attribute) => ({
        id: attribute.id,
        name: attribute.name,
        isSelected: false,
        credit: attribute.credit,
      }))
    }
    case SELECT_COURSE: {
      return state.map((attribute) => {
        if (attribute.id === action.index) {
          return {
            ...attribute,
            isSelected: true
          }
        }
        return { ...attribute }
      })
    }
    case UNSELECT_COURSE: {
      return state.map((attribute) => {
        if (attribute.id === action.index) {
          return {
            ...attribute,
            isSelected: false
          }
        }
        return { ...attribute }
      })
    }
    default:
      return state
  }
}
