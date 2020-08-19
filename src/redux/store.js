import {createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root.saga'
//import thunk from 'redux-thunk'


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run( rootSaga )

export const peristor = persistStore(store)


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



//store (createStore , middleware)
/**
 * * prevouse 
 * //store (createStore , middleware)

import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
 
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'

const middlewares = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const peristor = persistStore(store)


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 */