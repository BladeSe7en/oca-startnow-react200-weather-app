import { combineReducers } from 'redux';
import searchReducer from './components/search/SearchReducer';
import cityInfoReducer from './components/cityInfo/cityInfoReducer';

const rootReducer = combineReducers({
search: searchReducer,
cityInfo: cityInfoReducer
});

export default rootReducer;
