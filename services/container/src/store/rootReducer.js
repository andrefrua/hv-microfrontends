import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import servicesReducer from "./services/reducers";

const createRootReducer = (history, asyncReducers) =>
  combineReducers({
    services: servicesReducer,
    router: connectRouter(history),
    ...asyncReducers
  });

export default createRootReducer;
