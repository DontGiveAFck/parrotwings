import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers/rootReducer';
import {State} from "../types/state";
import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: State) {
    return createStore(
        createRootReducer(history), // root reducer with router state
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
            ),
        ),
    );
}
