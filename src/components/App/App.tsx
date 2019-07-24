import React, { Component } from 'react';
import './App.css';
import { cn } from '@bem-react/classname';
import { Header } from 'semantic-ui-react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../../store/configureStore';
import LoginPageContainer from '../../containers/LoginPageContainer/LoginPageContainer';
import RegistrationPageContainer from '../../containers/RegistrationPageContainer/RegistrationPageContainer';
import ProfilePageContainer from '../../containers/ProfilePageContainer/ProfilePageContainer';
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
                            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <LoginPageContainer />} />
                            <Route exact path={`${process.env.PUBLIC_URL}/registration`} render={() => <RegistrationPageContainer />} />
                            <Route exact path={`${process.env.PUBLIC_URL}/profile`} render={() => <ProfilePageContainer />} />
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
