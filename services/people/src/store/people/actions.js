export const SET_PEOPLE = "SET_PEOPLE";
export const SET_DETAILS = "SET_DETAILS";
export const IS_FETCHING = "IS_FETCHING";

export const setPeople = people => {
  return {
    type: SET_PEOPLE,
    payload: people
  };
};

export const setDetails = details => {
  return {
    type: SET_DETAILS,
    payload: details
  };
};

export const isFetching = isFetching => {
  return {
    type: IS_FETCHING,
    payload: isFetching
  };
};
