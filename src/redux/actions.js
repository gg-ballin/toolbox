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

  export const requestInput = () => (inputText) => {
      console.log('ajsdbnjasndjsd', inputText)
    //   return async (dispatch, store) => {
        //  dispatch({type: REQUEST_IO_PENDING});
         fetch(`http://localhost:8080/${inputText}`)
         .then(data => {
             console.log("vuelta de la api",data);
             // acac que cae ???
            //  dispatch({type:REQUEST_IO_SUCCESS, payload:data})
         })
        .catch(error => {
             console.log('err', error)
            //  dispatch({type:REQUEST_IO_FAILED, payload:error})
         })
    //   }
     

    //esta es la action que deberia triggearse una vez que se aprieta el boton para dejar 
    //la info en el Output

     
 } 