import { 
    CHANGE_INPUT_FIELD, 
    REQUEST_IO_PENDING,
    REQUEST_IO_SUCCESS,
    REQUEST_IO_FAILED
 } from './constants';

 const initialInputState = {
     inputState: ''
 }

 export const updateIO = (state = initialInputState, action = {}) => {
     switch(action.type) {
        case CHANGE_INPUT_FIELD:
            return Object.assign({}, state, {input: action.payload})
        default:
            return state;
     }
 }

const initialStateInput = {
    isPending:false,
    inputState:'',
    error:''
}

 export const requestInput = (state = initialStateInput, action = {}) => {
     switch(action.type) {
         case REQUEST_IO_PENDING:
            return Object.assign ({}, state, {isPending:true})
        case REQUEST_IO_SUCCESS:
            return Object.assign ({}, state, {input: action.payload, isPending: false})
        case REQUEST_IO_FAILED:
            return Object.assign ({}, state, {error: action.payload, isPending: false})
        default:
            return state;
     }
 }