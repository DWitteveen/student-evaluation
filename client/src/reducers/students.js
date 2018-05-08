import { GET_STUDENTS, ADD_STUDENT } from '../actions/students'

export default function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.payload
    case ADD_STUDENT:
      return state.concat(action.payload)
    default:
      return state
  }
}

