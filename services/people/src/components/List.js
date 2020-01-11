import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPeople, getMore } from "../store/people/thunks";

const List = ({ people, dispatch }) => {
  const { results, next, isFetching } = people;

  useEffect(() => {
    if (!results.length) dispatch(getPeople());
  }, []);

  return (
    <>
      <button
        onClick={() => {
          !isFetching && dispatch(getMore(next));
        }}
      >
        + people
      </button>
      <ul>
        {results.map(elem => {
          const id = elem.url.split("/").reverse()[1];

          return (
            <Link key={elem.name} to={`/people/${id}`}>
              <li>{elem.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = ({ people }) => ({ people });

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(List);
