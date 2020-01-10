import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPeople } from "../store/people/thunks";

const List = ({ people, dispatch }) => {
  const { list } = people;

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <ul>
      {list.map(elem => {
        const id = elem.url.split("/").reverse()[1];

        return (
          <Link key={id} to={`/people/${id}`}>
            <li>{elem.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ people }) => ({ people });

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(List);
