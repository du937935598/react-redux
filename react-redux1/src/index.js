import React from 'react';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainRedux from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(mainRedux);

render(
    <Provider>
        <App store={store} />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
