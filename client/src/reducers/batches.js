import { GET_BATCHES } from '../actions/batches'

export default function (state = [], action) {
  switch (action.type) {
    case GET_BATCHES:
      return action.payload
    // case ADD_BATCH:
    //   return state.concat(action.payload)
    default:
      return state
  }
}