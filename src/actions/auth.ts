export const LOGIN = 'LOGIN';
type LOGIN = typeof LOGIN;

export interface Login {
    type: LOGIN;
    value: boolean;
}

export function login(
    value: boolean
): Login {
    return {
        type: LOGIN,
        value
    };
}

export const GO_TO_REGISTRATION_PAGE = 'GO_TO_REGISTRATION_PAGE';
type GO_TO_REGISTRATION_PAGE = typeof GO_TO_REGISTRATION_PAGE;

export interface GoToRegistrationPage {
    type: GO_TO_REGISTRATION_PAGE;
    value: boolean;
}

export function goToRegistrationPage(
    value: boolean
): GoToRegistrationPage {
    return {
        type: GO_TO_REGISTRATION_PAGE,
        value
    };
}

export type Action =
    | GoToRegistrationPage;
