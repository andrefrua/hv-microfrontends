import { fetchPeople, fetchMore, fetchDetails } from "../../lib/api/people";
import { setPeople, setDetails, isFetching } from "./actions";

const getPeople = () => async dispatch => {
  dispatch(isFetching(true));
  const people = await fetchPeople();
  dispatch(isFetching(false));
  dispatch(setPeople(people));
};

const getMore = url => async dispatch => {
  dispatch(isFetching(true));
  const people = await fetchMore(url);
  dispatch(isFetching(false));
  dispatch(setPeople(people));
};

const getDetails = id => async dispatch => {
  dispatch(isFetching(true));
  const details = await fetchDetails(id);
  dispatch(isFetching(false));
  dispatch(setDetails(details));
};

export { getPeople, getMore, getDetails };
