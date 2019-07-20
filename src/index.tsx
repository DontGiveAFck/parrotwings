import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './containers/App/App';
import configureStore, { history } from './store/configureStore';
import { initialState } from './reducers/rootReducer';

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route exact path="/" render={() => <App />} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
