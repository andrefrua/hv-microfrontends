import { ADD_SERVICES } from "./actions";

const initialServices = [];

const reducers = (state = initialServices, action) => {
  switch (action.type) {
    case ADD_SERVICES:
      return action.payload;
      break;

    default:
      return state;
  }
};

export default reducers;
