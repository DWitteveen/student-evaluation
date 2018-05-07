import * as request from 'superagent'
import {baseUrl} from '../constants'

export const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID'

export const getStudent = (studentId) => (dispatch) => {

    request
    .get('${baseUrl}/students/:id')
    .then(result => dispatch({
        type: GET_STUDENT_BY_ID,
        payload: result.body
    }))
    .catch(err => alert(err))
}
