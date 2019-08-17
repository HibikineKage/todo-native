import actionCreatorFactory from 'typescript-fsa';

export interface TodoData {
  text: string;
  completed: boolean;
}
const actionCreator = actionCreatorFactory();
export const addTodo = actionCreator<TodoData>('ADD_TODO');
export const deleteTodo = actionCreator('DELETE_TODO');
export const EDIT_TODO = actionCreator('EDIT_TODO');
