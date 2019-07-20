import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import createRootReducer from '../reducers/rootReducer';
import { State } from '../typings/common';
import epics from '../epics/epics';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

export default function configureStore(preloadedState: State) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                epicMiddleware
            ),
        ),
    );

    epicMiddleware.run(epics);

    return store;
}
