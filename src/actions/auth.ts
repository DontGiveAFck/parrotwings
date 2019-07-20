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
