import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  return store;
};

