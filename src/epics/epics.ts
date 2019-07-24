import { combineEpics } from 'redux-observable';
import {
    goToRegistrationPageEpic,
    goToLoginPageEpic,
    registrationEpic,
    goToProfilePageEpic,
    loginEpic
} from './auth';

import {
    fetchProfileDataEpic,
    fetchFilteredUsersListEpic,
    createTransactionEpic,
    logoutEpic,
    fetchProfileDataSuccessEpic
} from './profile';

export default combineEpics(
    goToRegistrationPageEpic,
    goToLoginPageEpic,
    registrationEpic,
    goToProfilePageEpic,
    loginEpic,
    fetchProfileDataEpic,
    fetchFilteredUsersListEpic,
    createTransactionEpic,
    logoutEpic,
    fetchProfileDataSuccessEpic
);
