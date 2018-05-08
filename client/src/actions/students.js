import * as request from 'superagent'
import { baseUrl } from '../constants'


export const GET_STUDENTS = "GET_STUDENTS"
export const ADD_STUDENT = "ADD_STUDENT"  


export const getStudents = () => (dispatch, getState) => {
  
  request
    .get(`${baseUrl}/students/`)
    .then(response => dispatch({
      type: GET_STUDENTS,
      payload: response.body.students
    }))
    .catch(err => console.log(err))

}

export const addStudent = (student) => (dispatch, getState) => {
  
  request
  .post(`${baseUrl}/students`)
  .send(student)
  .then(response => dispatch({
    type: ADD_STUDENT,
    payload: response.body
  }))
}

