// base
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { configureStore } from './stores/configureStore';

// components
import App from './components/app';

// styles
import './styles/Employee/list.scss';
import './styles/main.scss';
import './styles/Login/login.scss';
import './styles/About/about.scss';
import './styles/Common/header.scss';
import './styles/Employee/details.scss';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
