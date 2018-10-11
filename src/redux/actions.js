import { 
    CHANGE_INPUT_FIELD, 
    REQUEST_IO_PENDING,
    REQUEST_IO_SUCCESS,
    REQUEST_IO_FAILED
 } from './constants';

 export const setInputField = (text) => { 
    console.log(text)
    return {
         type:CHANGE_INPUT_FIELD,
         payload: text
     }
 }

  export const requestInput = (inputText) => {
    return async (dispatch, getState) => {
         dispatch({type: REQUEST_IO_PENDING});
         fetch(`http://localhost:8080/${inputText}`)
         .then(data => {
             dispatch({type:REQUEST_IO_SUCCESS, payload:data})
         })
        .catch(error => {
             dispatch({type:REQUEST_IO_FAILED, payload:error})
         })
    }     
 } 