import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import peopleReducer from "./people/reducer";

const createRootReducer = history =>
  combineReducers({
    people: peopleReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
