import { combineEpics } from 'redux-observable';
import {
    goToRegistrationPage,
    goToLoginPage,
    registrationEpic,
    goToProfilePage,
    loginEpic
} from './auth';

import { fetchProfileDataEpic, fetchFilteredUsersListEpic } from './profile';

export default combineEpics(
    goToRegistrationPage,
    goToLoginPage,
    registrationEpic,
    goToProfilePage,
    loginEpic,
    fetchProfileDataEpic,
    fetchFilteredUsersListEpic
);
