import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { missionsReducer } from './missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;