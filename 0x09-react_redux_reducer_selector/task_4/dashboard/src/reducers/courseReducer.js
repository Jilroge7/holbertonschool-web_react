const { Map, setIn, merge } = require('immutable');
import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes.js';

const courseReducerState = Map([])

export default function courseReducer(state = courseReducerState, action) {
  state = Map(state)
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const data = action.data.map((attribute) => ({
        id: attribute.id,
        name: attribute.name,
        isSelected: false,
        credit: attribute.credit,
      }))
      normalizData = coursesNormalizer(data)
      return state.merge(normalizData)
    }
    case SELECT_COURSE: {
      return state.setIn([isSelected], true)
    }
    case UNSELECT_COURSE: {
      return state.setIn([isSelected], false)
    }
    default:
      return state
  }
}
