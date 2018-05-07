import {GET_STUDENT_BY_ID} from '../actions/students'

export default function (state = [], action) {
    switch (action.type) {
        case GET_STUDENT_BY_ID:
        return action.payload

        default:
        return state
    }
}