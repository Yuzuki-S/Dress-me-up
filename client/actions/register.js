import request from '../utils/api'
import {receiveLogin} from './login'
import {saveUserToken} from '../utils/auth'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'


function requestRegister (creds) {
    return {
        type:REGISTER_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds // creds is the variable tha holds the info entered into the form.
    }
}


export function registerError (message){
    return {
        type:REGISTER_FAILURE,
        isFetching:false,
        isAuthenticated:false,
        message
    }
}

// CREDS must be an object.


export function registerUser (creds) {
    return dispatch => {
        dispatch(requestRegister(creds))
        return request('post', '/signup', creds)//talking to the server here
        .then((response) => {
            if(!response.ok){
                dispatch(registerError(response.body.message))
                return Promise.reject(response.body.message)
            } else {
                const userInfo = saveUserToken(response.body.token)
                dispatch(receiveLogin(userInfo))
            }
        }) .catch(err => {
            dispatch(registerError(err.response.body.message))
        })
    }
}