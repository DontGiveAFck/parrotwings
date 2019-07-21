import React, { Component } from 'react';
import './App.css';
import { cn } from '@bem-react/classname';
import { Header } from 'semantic-ui-react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { history } from '../../store/configureStore';
import LoginPage from '../../containers/LoginPage/LoginPage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import ProfilePage from '../../containers/ProfilePage/ProfilePage';

const BLOCK = cn('App');

class App extends Component {

    componentDidMount(): void {

    }

    render() {
        return (
            <div className={BLOCK()}>
                <ConnectedRouter history={history}>
                    <>
                        <Switch>
                            <Route exact path="/" render={() => <LoginPage />} />
                        </Switch>
                        <Switch>
                            <Route exact path="/registration" render={() => <RegistrationPage />} />
                        </Switch>
                        <Switch>
                            <Route exact path="/profile" render={() => <ProfilePage />} />
                        </Switch>
                    </>
                </ConnectedRouter>
            </div>
        );
    }
}

export default App;
