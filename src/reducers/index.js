import { combineReducers } from 'redux';
import { routeReducer } from './routes';

export const rootReducer = combineReducers({
    routes: routeReducer,
});
