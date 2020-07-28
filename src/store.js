import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from './redux/reducers/userReducer'
import counterReducer from './redux/reducers/counterReducer'

export default createStore(
  combineReducers({
    user: userReducer,
    counter: counterReducer,
  }),
  {},
  applyMiddleware(logger)
);