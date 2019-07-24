import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { AuthField, State, UserAuth } from '../../typings/common';
import LoginPage from '../../components/LoginPage/LoginPage';
import { changeAuthField, goToRegistrationPage, login } from '../../actions/auth';

const logitPageSelector = createSelector(
    (state: State): string => state.auth.credentials.email,
    (state: State): string => state.auth.credentials.password,
    (state: State): string | undefined => state.auth.errorText,
    (state: State): boolean => state.auth.isLoading,
    (email, password, errorText, isLoading) => ({
        email,
        password,
        errorText,
        isLoading
    })
);

const mapStateToProps = (
    state: State
) => ({
    ...logitPageSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openRegistrationPageClick: () => dispatch(goToRegistrationPage()),
    onChangeAuthField: (field: AuthField, value: string) => dispatch(changeAuthField(field, value)),
    onLoginButtonClick: (credentials: UserAuth) => dispatch(login(credentials))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
