import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { AuthField, State, UserAuth } from '../../typings/common';
import { goToLoginPage, registation, changeAuthField } from '../../actions/auth';
import RegistrationPage from '../../components/RegistrationPage/RegistrationPage';

const registrationPageSelector = createSelector(
    (state: State): string | undefined => state.auth.credentials.username,
    (state: State): string => state.auth.credentials.email,
    (state: State): string => state.auth.credentials.password,
    (state: State): string | undefined => state.auth.credentials.rPassword,
    (state: State): string | undefined => state.auth.errorText,
    (state: State): boolean => state.auth.isLoading,
    (username, email, password, rPassword, errorText, isLoading) => ({
        username,
        email,
        password,
        rPassword,
        errorText,
        isLoading
    })
);

const mapStateToProps = (
    state: State
) => ({
    ...registrationPageSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openLoginPageClick: () => dispatch(goToLoginPage()),
    registrationButtonClick: (credentials: UserAuth) => dispatch(registation(credentials)),
    onChangeAuthField: (field: AuthField, value: string) => dispatch(changeAuthField(field, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationPage);
