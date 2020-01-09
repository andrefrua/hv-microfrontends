import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import servicesReducer from "./services/reducers";

const createRootReducer = history =>
  combineReducers({
    services: servicesReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
