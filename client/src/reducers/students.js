import { GET_STUDENTS } from '../actions/students'

export default function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.payload
    default:
      return state
  }
}

