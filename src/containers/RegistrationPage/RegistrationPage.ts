import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { AuthField, State, UserAuth } from '../../typings/common';
import { goToLoginPage, registation, changeAuthField } from '../../actions/auth';
import RegistrationPage, { RegistrationPageProps } from '../../components/RegistrationPage/RegistrationPage';

const variableSelector = createSelector(
    // @ts-ignore
    (state: State): string => state.auth.credentials.username,
    (state: State): string => state.auth.credentials.email,
    (state: State): string => state.auth.credentials.password,
    (state: State): string | undefined => state.auth.credentials.rPassword,
    (state: State): string | undefined => state.auth.errorText,
    (username, email, password, rPassword, errorText) => {
        return ({
            username,
            email,
            password,
            rPassword,
            errorText
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
    openLoginPageClick: () => dispatch(goToLoginPage()),
    registrationButtonClick: (credentials: UserAuth) => dispatch(registation(credentials)),
    onChangeAuthField: (field: AuthField, value: string) => dispatch(changeAuthField(field, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationPage);
