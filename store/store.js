import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import homeReducer from './reducers/HomeReducer';
const rootReducer = combineReducers({
    home: homeReducer 
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;