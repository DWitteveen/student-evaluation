import { GET_EVALUATIONS } from '../actions/evaluations'

export default function (state = [], action) {
  switch (action.type) {
    case GET_EVALUATIONS:
      return action.payload
    default:
      return state
  }
}