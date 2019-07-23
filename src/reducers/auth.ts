import { Reducer } from 'redux';
import {
    AuthField, AuthPage, AuthPageState, State
} from '../typings/common';
import { Action } from '../actions/action';
import { authPageState } from './rootReducer';
import {
    CHANGE_AUTH_FIELD,
    ChangeAuthField,
    GO_TO_LOGIN_PAGE,
    GO_TO_REGISTRATION_PAGE,
    USER_AUTH_FAILURE,
    UserAuthFailure
} from '../actions/auth';

function goToRegistrationPage(
    state: AuthPageState,
    action: Action
): AuthPageState {
    return {
        ...state,
        page: AuthPage.REGISTRATION,
        credentials: {
            username: '',
            email: '',
            password: ''
        },
        errorText: ''
    };
}

function goToLoginPage(
    state: AuthPageState,
    action: Action
): AuthPageState {
    return {
        ...state,
        page: AuthPage.LOGIN,
        credentials: {
            username: '',
            email: '',
            password: '',
            rPassword: ''
        },
        errorText: ''
    };
}

function changeAuthField(
    state: AuthPageState,
    action: ChangeAuthField
): AuthPageState {
    const field = action.field.toUpperCase();
    const newCredentials = {
        ...state.credentials
    };

    if (field === AuthField.USERNAME) {
        newCredentials.username = action.value;
    } else if (field === AuthField.EMAIL) {
        newCredentials.email = action.value;
    } else if (field === AuthField.PASSWORD) {
        newCredentials.password = action.value;
    } else if (field === AuthField.PASSWORD_REPEAT) {
        newCredentials.rPassword = action.value;
    }

    return {
        ...state,
        page: AuthPage.LOGIN,
        credentials: {
            ...newCredentials
        }
    };
}

function setAuthErrorText(
    state: AuthPageState,
    action: UserAuthFailure
): AuthPageState {
    return {
        ...state,
        errorText: action.errorText
    };
}

// TODO - избавиться от tsignore
// @ts-ignore
export const authReducer: Reducer<AuthPageState, Action> = (
    state: AuthPageState = authPageState,
    action: Action,
    fullState: State
): AuthPageState => {
    switch (action.type) {
        case GO_TO_REGISTRATION_PAGE:
            return goToRegistrationPage(state, action);
        case GO_TO_LOGIN_PAGE:
            return goToLoginPage(state, action);
        case CHANGE_AUTH_FIELD:
            return changeAuthField(state, action);
        case USER_AUTH_FAILURE:
            return setAuthErrorText(state, action);
        default:
            return state;
    }
};
