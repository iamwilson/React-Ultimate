import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

const middleware = process.env.NODE_ENV !== 'production' ?

[require("redux-immutable-state-invariant").default(), thunk] :   [thunk];

/** Configures the Redux store* 
 @param {any} initialState The initial state
 @returns {any} The created Redux store */

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
};

// function configureStore(initialState?: any): any {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(...middleware)
//     );
// }
// export default configureStore;
