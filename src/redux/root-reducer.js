import {combineReducers} from 'redux';

import {inputDataReducer} from './input-data/input-data.reducer';

export default combineReducers({
    inputData: inputDataReducer
})