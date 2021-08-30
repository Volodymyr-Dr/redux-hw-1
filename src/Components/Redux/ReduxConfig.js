import {createStore} from 'redux';
import myReducer from '../Reducers/Reducer';

const store = createStore(myReducer);

export default store;