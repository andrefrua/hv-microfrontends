import { fetchPeople, fetchDetails } from "../../lib/api/people";
import { setPeople, setDetails, resetDetails } from "./actions";

const getPeople = () => async dispatch => {
  const people = await fetchPeople();
  dispatch(setPeople(people));
};

const getDetails = id => async dispatch => {
  dispatch(resetDetails());
  const details = await fetchDetails(id);
  dispatch(setDetails(details));
};

export { getPeople, getDetails };
