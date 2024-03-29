import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer/AppContainer';
import configureStore from './store/configureStore';
import { initialState } from './reducers/rootReducer';

import 'semantic-ui-css/semantic.min.css';

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
