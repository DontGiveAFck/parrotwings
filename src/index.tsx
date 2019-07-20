import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, {history} from "./store/configureStore";
import {initialState} from "./reducers/rootReducer";

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
            <> { /* your usual react-router v4/v5 routing */ }
                <Switch>
                    <Route exact path="/" render={() => <App />} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
