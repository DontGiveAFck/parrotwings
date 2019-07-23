import React, { Component } from 'react';
import './App.css';
import { cn } from '@bem-react/classname';
import { Header } from 'semantic-ui-react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../../store/configureStore';
import LoginPage from '../../containers/LoginPage/LoginPage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import ProfilePage from '../../containers/ProfilePage/ProfilePage';
import LocalStorage from '../../services/LocalStorage';

const BLOCK = cn('App');

interface AppProps {
    goToProfilePage: (idToken: string) => void;
}

class App extends Component<AppProps> {
    componentDidMount(): void {
        const { goToProfilePage } = this.props;
        const token = LocalStorage.getValue('id_token');
        if (token) {
            goToProfilePage(token);
        }
    }

    render() {
        return (
            <div className={BLOCK()}>
                <ConnectedRouter history={history}>
                    <>
                        <Switch>
                            <Route exact path="/" render={() => <LoginPage />} />
                            <Route exact path="/registration" render={() => <RegistrationPage />} />
                            <Route exact path="/profile" render={() => <ProfilePage />} />
                            <Route render={
                                () => (
                                    <div className={BLOCK('NotFoundPage')}>
                                        <Header as="h1">404 - Not found</Header>
                                    </div>
                                )}
                            />
                        </Switch>
                    </>
                </ConnectedRouter>
            </div>
        );
    }
}

export default App;
