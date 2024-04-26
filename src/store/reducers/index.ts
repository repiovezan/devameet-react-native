import auth from './authData'
import message from './messageData'
import user from './userData'
import {combineReducers} from 'redux'

const reducers = {
    auth, 
    message,
    user, 
}

export const Reducers  = combineReducers(reducers)