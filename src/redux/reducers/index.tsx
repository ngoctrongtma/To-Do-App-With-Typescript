import { combineReducers } from 'redux';
import completeReducer from './completeReducer';
import incompleteReducer from './incompleteReducer';

export default combineReducers({
    complete: completeReducer,
    incomplete: incompleteReducer,
});