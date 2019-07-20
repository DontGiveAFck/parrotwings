import React, { Component } from 'react';
import './App.css';
import { cn } from '@bem-react/classname';
import { Header } from 'semantic-ui-react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { history } from '../../store/configureStore';
import LoginPage from '../../containers/LoginPage/LoginPage';

const BLOCK = cn('App');

export interface AppProps {
    handleClick: (event: any) => void;
    variable: boolean;
}

class App extends Component<AppProps> {
    render() {
        return (
            <div className={BLOCK()}>
                <ConnectedRouter history={history}>
                    <>
                        <Switch>
                            <Route exact path="/" render={() => <LoginPage />} />
                        </Switch>
                        <Switch>
                            <Route exact path="/login" render={() => <div>asd</div>} />
                        </Switch>
                    </>
                </ConnectedRouter>
            </div>
        );
    }
}

export default App;
