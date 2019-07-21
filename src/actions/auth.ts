import { AuthField, UserRegistration} from '../typings/common';

export const GO_TO_REGISTRATION_PAGE = 'GO_TO_REGISTRATION_PAGE';
type GO_TO_REGISTRATION_PAGE = typeof GO_TO_REGISTRATION_PAGE;

export interface GoToRegistrationPage {
    type: GO_TO_REGISTRATION_PAGE;
}

export function goToRegistrationPage(
): GoToRegistrationPage {
    return {
        type: GO_TO_REGISTRATION_PAGE,
    };
}

export const GO_TO_LOGIN_PAGE = 'GO_TO_LOGIN_PAGE';
type GO_TO_LOGIN_PAGE = typeof GO_TO_LOGIN_PAGE;

export interface GoToLoginPage {
    type: GO_TO_LOGIN_PAGE;
}

export function goToLoginPage(
): GoToLoginPage {
    return {
        type: GO_TO_LOGIN_PAGE,
    };
}

export const REGISTRATION = 'REGISTRATION';
type REGISTRATION = typeof REGISTRATION;

export interface Registration {
    type: REGISTRATION;
    credentials: UserRegistration
}

export function registation(
    credentials: UserRegistration
): Registration {
    return {
        type: REGISTRATION,
        credentials
    };
}

export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
type CHANGE_AUTH_FIELD = typeof CHANGE_AUTH_FIELD;

export interface ChangeAuthField {
    type: CHANGE_AUTH_FIELD;
    field: AuthField,
    value: string
}

export function changeAuthField(
    field: AuthField,
    value: string
): ChangeAuthField {
    return {
        type: CHANGE_AUTH_FIELD,
        field,
        value
    };
}

export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
type USER_AUTH_SUCCESS = typeof USER_AUTH_SUCCESS;

export interface UserAuthSuccess {
    type: USER_AUTH_SUCCESS;
    idToken: string;
}

export function userAuthSuccess(
    idToken: string
): UserAuthSuccess {
    return {
        type: USER_AUTH_SUCCESS,
        idToken
    };
}

export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE';
type USER_AUTH_FAILURE = typeof USER_AUTH_FAILURE;

export interface UserAuthFailure {
    type: USER_AUTH_FAILURE;
    errorText: string;
}

export function userAuthFailure(
    errorText: string
): UserAuthFailure {
    return {
        type: USER_AUTH_FAILURE,
        errorText
    };
}

export const LOGIN = 'LOGIN';
type LOGIN = typeof LOGIN;

export interface Login {
    type: LOGIN;
    credentials: UserRegistration;
}

export function login(
    credentials: UserRegistration
): Login {
    return {
        type: LOGIN,
        credentials
    };
}

