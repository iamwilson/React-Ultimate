import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";

const middleware = process.env.NODE_ENV !== "production" ?

[require("redux-immutable-state-invariant").default(), thunk] :   [thunk];

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
};
