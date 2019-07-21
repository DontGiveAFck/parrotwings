import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';
import {AuthField, State, UserRegistration} from '../../typings/common';
import LoginPage from '../../components/LoginPage/LoginPage';
import {changeAuthField, goToRegistrationPage, login} from '../../actions/auth';

const variableSelector = createSelector(
    // @ts-ignore
    (state: State): string => state.auth.credentials.email,
    (state: State): string => state.auth.credentials.password,
    (email, password) => {
        return ({
            email,
            password
        });
    }
);

const mapStateToProps = (
    state: State
) => ({
    ...variableSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openRegistrationPageClick: () => dispatch(goToRegistrationPage()),
    onChangeAuthField: (field: AuthField, value: string) => dispatch(changeAuthField(field, value)),
    onLoginButtonClick: (credentials: UserRegistration) => dispatch(login(credentials))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(LoginPage);
