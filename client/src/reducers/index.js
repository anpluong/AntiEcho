import { combineReducers } from 'redux';
import steeringReducer from './steeringReducer';
import mainReducer from './mainReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  user: userReducer,
  main: mainReducer,
  steering: steeringReducer,
});

export default reducers;
