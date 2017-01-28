import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ContactsApp from './components/ContactsApp.jsx';

import store from './store';

import 'normalize.css';
import './assets/main.css';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <ContactsApp />
    </Provider>,
    document.getElementById('root'),
);
