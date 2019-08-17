import { combineReducers } from 'redux';
import todo, { State as TodoState } from './todo/reducer';

export interface State {
  todo: TodoState;
}
const rootReducer = combineReducers({ todo });
export default rootReducer;
