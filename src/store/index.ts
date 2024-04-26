import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import { Reducers } from './reducers';
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'devaMeet',
    storage: AsyncStorage,
    whiteList: ['auth', 'message', 'usersConnected']
}

const persistedReducer = persistReducer(persistConfig, Reducers)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))

export const persistor = persistStore(store)