import { rootReducer } from 'reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// TODO: get devtools back --> https://stackoverflow.com/questions/53514758/redux-typeerror-cannot-read-property-apply-of-undefined
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
