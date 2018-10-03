import { 
    CHANGE_INPUT_FIELD, 
    REQUEST_IO_PENDING,
    REQUEST_IO_SUCCESS,
    REQUEST_IO_FAILED
 } from './constants';

 export const setInputField = (text) => {
     return {
         type:CHANGE_INPUT_FIELD,
         payload: text
     }
 }

  export const requestInput = () => (dispatch) => {
     dispatch({type: REQUEST_IO_PENDING});
     fetch('http://localhost:8000')
     .then(response => response.json())
     .then(data => dispatch({type:REQUEST_IO_SUCCESS, payload:data}))
     .catch(error => dispatch({type:REQUEST_IO_FAILED, payload:error}))
     
 } 