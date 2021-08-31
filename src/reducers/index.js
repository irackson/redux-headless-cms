import { combineReducers } from 'redux';
import { contentReducer } from './content';
import { routesReducer } from './routes';

export const rootReducer = combineReducers({
    routes: routesReducer,
    content: contentReducer,
});
