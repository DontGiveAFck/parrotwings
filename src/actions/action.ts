import {ChangeAuthField, GoToLoginPage, GoToRegistrationPage} from './auth';

export type Action =
    | GoToLoginPage
    | ChangeAuthField
    | GoToRegistrationPage;
