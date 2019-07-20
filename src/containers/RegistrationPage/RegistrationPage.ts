import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { AuthField, State, UserRegistration } from '../../typings/common';
import { goToLoginPage, registation, changeAuthField } from '../../actions/auth';
import RegistrationPage, { RegistrationPageProps } from '../../components/RegistrationPage/RegistrationPage';

const variableSelector = createSelector(
    // @ts-ignore
    (state: State): string => state.auth.credentials.username,
    (state: State): string => state.auth.credentials.email,
    (state: State): string => state.auth.credentials.password,
    (username, email, password) => {
        console.log(username);
        return ({
            username,
            email,
            password
        });
    }
);

const mapStateToProps = (
    state: State
) => {
    const creds = variableSelector(state);
    return ({
        username: creds.username,
        password: creds.password,
        email: creds.email
    });
};

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openLoginPageClick: () => dispatch(goToLoginPage()),
    registrationButtonClick: (credentials: UserRegistration) => dispatch(registation(credentials)),
    onChangeAuthField: (field: AuthField, value: string) => dispatch(changeAuthField(field, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(RegistrationPage);
