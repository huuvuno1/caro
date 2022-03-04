import { combineReducers } from 'redux';
import matrixReducer from './matrix/matrix.reducer.js';
import matchReducer from './match/match.reducer.js';

const rootReducer = combineReducers({
    matrix: matrixReducer,
    match: matchReducer
});

export default rootReducer;