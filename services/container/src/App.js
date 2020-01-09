import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./store";
import Routes from "./lib/routes";
import Header from "./components/Header";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;
