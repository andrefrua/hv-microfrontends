import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetails } from "../store/people/thunks";
import { useParams } from "react-router-dom";

const Details = ({ people, dispatch }) => {
  const { details } = people;
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  return details ? (
    <h1>
      {details.name} --- {details.birth_year}
    </h1>
  ) : (
    ""
  );
};

const mapStateToProps = ({ people }) => ({ people });

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Details);
