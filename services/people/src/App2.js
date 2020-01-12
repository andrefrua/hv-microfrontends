import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Routes from "./lib/routes";
import reducer from "./store/people/reducer";

const App = ({ history, store }) => {
  store.injectReducer("people", reducer);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
