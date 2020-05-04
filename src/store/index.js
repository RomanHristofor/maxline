import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import {api} from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, api);

const store = createStore(reducer, {}, enhancer);
window.store = store //only dev mode

export default store