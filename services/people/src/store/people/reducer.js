import produce from "immer";
import { SET_PEOPLE, SET_DETAILS, RESET_DETAILS } from "./actions";

const initialState = {
  list: [],
  details: null
};

const reducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PEOPLE: {
      draft.list = [...payload];
      return draft;
    }
    case SET_DETAILS: {
      draft.details = payload;
      return draft;
    }
    case RESET_DETAILS: {
      draft.details = null;
      return draft;
    }
  }
}, initialState);

export default reducer;
