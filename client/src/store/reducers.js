import { combineReducers } from "redux";
import skans from './skans';
import auth from './auth';


const rootReducer = combineReducers({
  auth,
});


export default rootReducer;
