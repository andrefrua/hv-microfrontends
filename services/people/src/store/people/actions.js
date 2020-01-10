export const SET_PEOPLE = "SET_PEOPLE";
export const SET_DETAILS = "SET_DETAILS";
export const RESET_DETAILS = "RESET_DETAILS";

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

export const resetDetails = () => {
  return {
    type: RESET_DETAILS
  };
};
