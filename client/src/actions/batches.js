import * as request from 'superagent'
import { baseUrl } from '../constants'


export const GET_BATCHES = "GET_BATCHES"


export const getBatches = () => (dispatch, getState) => {
  
  request
    .get(`${baseUrl}/batches/`)
    .then(response => dispatch({
      type: GET_BATCHES,
      payload: response.body.batches
    }))
    .catch(err => console.log(err))

}
