// base
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { configureStore } from "./stores/configureStore";

// components
import App from "./components/app";

// styles
import "./styles/about/about.scss";

import "./styles/common/header.scss";
import "./styles/common/footer.scss";

import "./styles/elements/button.scss";
import "./styles/elements/loader.scss";

import "./styles/employee/employee.scss";
import "./styles/employee/list.scss";

import "./styles/login/login.scss";

import "./styles/main.scss";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
