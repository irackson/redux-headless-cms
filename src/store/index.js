import { rootReducer } from 'reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
