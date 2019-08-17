import reducer from './reducer';
import { createStore } from '../node_modules/redux';

const initStore = () => createStore(reducer);
export default initStore;
