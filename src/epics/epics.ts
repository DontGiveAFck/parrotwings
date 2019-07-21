import { combineEpics } from 'redux-observable';
import {
    goToRegistrationPage,
    goToLoginPage,
    registrationEpic,
    goToProfilePage,
    loginEpic
} from './auth';

export default combineEpics(
    goToRegistrationPage,
    goToLoginPage,
    registrationEpic,
    goToProfilePage,
    loginEpic
);
