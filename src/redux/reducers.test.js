import { 
    CHANGE_INPUT_FIELD, 
    CHANGE_INPUT_FIELD_SUCCESS,
    REQUEST_IO_PENDING,
    REQUEST_IO_SUCCESS,
    REQUEST_IO_FAILED
 } from './constants';
import * as reducers from './reducers'

describe("updateIO!!!!!!!!!!!!", () => {
    const initialInputStateMock = {
        inputState: '',
        apiResponse: '',
        input: ''
    }
    const initialInputStateMock2 = {
        input: ''
    }
    it('should return the initial state', () => {
        expect(reducers.updateIO(undefined, {})).toEqual({input: '', inputState: '', apiResponse: ''})
    })
    it('should handle CHANGE_INPUT_FIELD', () => {
        expect(reducers.updateIO(initialInputStateMock2, {
            type: CHANGE_INPUT_FIELD,
            payload: 'hola'
        })).toEqual({
            input: 'hola'})
    })
}) 

describe("requestInput??????????????", () => {
    const initialStateInputMock = {
        isPending:false,
        apiResponse:'',
        error:''
    }
    it('should return the initial state of requestInput', () => {
        expect(reducers.requestInput(undefined, {})).toEqual(initialStateInputMock)
    })

    it('should handle REQUEST_IO_PENDING action', () => {
        expect(reducers.requestInput(initialStateInputMock, {
            type: REQUEST_IO_PENDING
        })).toEqual({
            apiResponse: '',
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_IO_SUCCESS action', () => {
        expect(reducers.requestInput(initialStateInputMock, {
            type: REQUEST_IO_SUCCESS,
            payload: 'hola'
        })).toEqual({
            apiResponse: 'hola',
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_IO_FAILED action', () => {
        expect(reducers.requestInput(initialStateInputMock, {
            type: REQUEST_IO_FAILED,
            payload: 'err'
        })).toEqual({
            apiResponse: '',
            isPending: false,
            error: 'err'
        })
    })

})