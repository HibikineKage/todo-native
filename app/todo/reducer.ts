import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { addTodo, TodoData } from './actions';

export interface State {
  todo: TodoData[];
}
const initialState: State = { todo: [] };
const reducer = (state: State = initialState, action: Action): State => {
  if (isType(action, addTodo)) {
    return { ...state, todo: [...state.todo, action.payload] };
  }
  return state;
};
export default reducer;
