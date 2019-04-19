// core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// components
import App from './components/app';

// misc
import './favicon.ico';
import { configureStore } from './stores/configureStore';

// styles
import './styles/main.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
