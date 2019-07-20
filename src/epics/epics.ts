import { combineEpics } from 'redux-observable';
import { goToRegistrationPage, goToLoginPage, login } from './auth';

export default combineEpics(
    goToRegistrationPage,
    goToLoginPage,
    login
);
