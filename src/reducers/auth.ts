import { Reducer } from 'redux';
import {
    AuthField, AuthPage, AuthPageState
} from '../typings/common';
import { Action } from '../actions/actions';
import { authPageState } from './rootReducer';
import {
    CHANGE_AUTH_FIELD,
    ChangeAuthField,
    GO_TO_LOGIN_PAGE,
    GO_TO_REGISTRATION_PAGE,
    GoToLoginPage,
    GoToRegistrationPage, LOGIN, Login, REGISTRATION,
    USER_AUTH_FAILURE, USER_AUTH_SUCCESS,
    UserAuthFailure
} from '../actions/auth';
import { MAX_USERNAME_LENGTH } from '../constants/constants';
import { LOGOUT, Logout } from '../actions/profile';

function goToRegistrationPage(
    state: AuthPageState,
    action: GoToRegistrationPage
): AuthPageState {
    return {
        ...state,
        page: AuthPage.REGISTRATION,
        credentials: {
            username: '',
            email: '',
            password: '',
            rPassword: ''
        },
        errorText: ''
    };
}

function goToLoginPage(
    state: AuthPageState,
    action: GoToLoginPage
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

function logout(
    state: AuthPageState,
    action: Logout
): AuthPageState {
    return {
        ...state,
        errorText: ''
    };
}

function login(
    state: AuthPageState,
    action: Login
): AuthPageState {
    return {
        ...state,
        isLoading: true
    };
}

function loginSuccess(
    state: AuthPageState,
    action: Login
): AuthPageState {
    return {
        ...state,
        isLoading: true
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
        if (
            newCredentials.username
            && newCredentials.username.length > MAX_USERNAME_LENGTH
        ) {
            return state;
        }
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
        errorText: action.errorText,
        isLoading: false
    };
}

export const authReducer: Reducer<AuthPageState, Action> = (
    state: AuthPageState = authPageState,
    action: Action
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
        case LOGOUT:
            return logout(state, action);
        case REGISTRATION:
        case LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
