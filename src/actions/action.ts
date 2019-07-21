import {
    ChangeAuthField,
    GoToLoginPage,
    GoToRegistrationPage, Login,
    Registration,
    UserAuthFailure,
    UserAuthSuccess
} from './auth';

export type Action =
    | GoToLoginPage
    | ChangeAuthField
    | Registration
    | UserAuthSuccess
    | UserAuthFailure
    | Login
    | GoToRegistrationPage;
