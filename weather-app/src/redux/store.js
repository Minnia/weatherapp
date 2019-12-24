import thunk from "redux-thunk";
import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
const middlewares = [thunk];
export const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);
