import * as request from 'superagent'
import { baseUrl } from '../constants'


export const GET_EVALUATIONS = "GET_EVALUATIONS"


export const getEvaluations = () => (dispatch, getState) => {
  
  request
    .get(`${baseUrl}/evaluations/`)
    .then(response => dispatch({
      type: GET_EVALUATIONS,
      payload: response.body.evaluations
    }))
    .catch(err => console.log(err))

}