import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ServiceLoader from "./ServiceLoader";
import { getServices } from "../../store/services/thunks";
import { store } from "../../store";

const ServicesRoutes = ({ services, getServices }) => {
  useEffect(() => {
    getServices();
  }, []);

  return services.map(service => (
    <Route
      key={service.name}
      path={`/${service.name}`}
      component={({ history }) => (
        <ServiceLoader
          history={history}
          store={store}
          host={`http://${service.host}`}
        />
      )}
    />
  ));
};

const mapStateToProps = ({ services }) => {
  return {
    services
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServices: () => {
      dispatch(getServices());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesRoutes);
