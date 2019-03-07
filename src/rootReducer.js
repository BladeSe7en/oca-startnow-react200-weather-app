import { combineReducers } from 'redux';
import searchReducer from './components/search/searchReducer';

const rootReducer = combineReducers({
search: searchReducer,
});

export default rootReducer;
