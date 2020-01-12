import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2";

const service = `${process.env.SERVICE_NAME}-${process.env.SERVICE_ID}`;

// const render = (id = "root", history) => {
//   ReactDOM.render(<App history={history} />, document.getElementById(id));
// };

if (window[service]) {
  window[`render${service}`] = (
    containerId,
    containerHistory,
    containerStore
  ) => {
    ReactDOM.render(
      <App2 history={containerHistory} store={containerStore} />,
      document.getElementById(containerId)
    );
  };

  window[`unmount${service}`] = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
