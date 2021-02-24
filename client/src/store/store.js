import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const InitialStates = {};
const middleware = [thunk];

const store = createStore(rootReducer, InitialStates, compose(applyMiddleware(...middleware)));


export default store;