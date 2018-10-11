import * as actions from './actions';
import { 
    CHANGE_INPUT_FIELD, 
    CHANGE_INPUT_FIELD_SUCCESS,
    REQUEST_IO_PENDING,
    REQUEST_IO_SUCCESS,
    REQUEST_IO_FAILED
 } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe("setInputField and requestInput", () => {
    it('should create an action to sset the input field', () => {
       const text = 'hola';
       const expectedAction = {
           type: CHANGE_INPUT_FIELD,
           payload:text
       }
       expect(actions.setInputField(text)).toEqual(expectedAction)
    });
    it('handles requests to API', () => {
        const store = mockStore();
        const inputText = 'hola'
        store.dispatch(actions.requestInput(inputText));
        const action = store.getActions();
        
        const expectedAction = {
            type: REQUEST_IO_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })
    it('handles success requesting the API', () => {
        const store = mockStore();
        const inputText = 'hola'
        store.dispatch(actions.requestInput(inputText));
        const action = store.dispatch(
            {
                type: REQUEST_IO_SUCCESS,
                payload: inputText
            })
        const expectedAction = {
            type: REQUEST_IO_SUCCESS,
            payload: inputText
        }
        expect(action).toEqual(expectedAction)
    })
})