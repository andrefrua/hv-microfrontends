import produce from "immer";
import { SET_PEOPLE, SET_DETAILS, IS_FETCHING } from "./actions";

const initialState = {
  results: [],
  next: null,
  details: null,
  isFetching: false
};

const reducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PEOPLE: {
      draft.results = [...draft.results, ...payload.results];
      draft.next = payload.next;
      return draft;
    }
    case SET_DETAILS: {
      draft.details = payload;
      return draft;
    }
    case IS_FETCHING: {
      draft.isFetching = payload;
      return draft;
    }
  }
}, initialState);

export default reducer;
