import { ActionsObservable, ofType } from 'redux-observable';
import {
    mergeMap, map, catchError
} from 'rxjs/operators';
import { of } from 'rxjs';
import { push } from 'connected-react-router';
import {
    GO_TO_REGISTRATION_PAGE,
    GO_TO_LOGIN_PAGE,
    REGISTRATION,
    userAuthSuccess,
    userAuthFailure,
    USER_AUTH_SUCCESS,
    LOGIN,
    GoToRegistrationPage,
    GoToLoginPage,
    UserAuthSuccess,
    Registration,
    Login
} from '../actions/auth';
import API from '../api/api';
import LocalStorage from '../services/LocalStorage';

export const goToRegistrationPageEpic = (
    action$: ActionsObservable<GoToRegistrationPage>
) => action$.pipe(
    ofType(GO_TO_REGISTRATION_PAGE),
    mergeMap(action => of(push('/registration')))
);

export const goToLoginPageEpic = (
    action$: ActionsObservable<GoToLoginPage>
) => action$.pipe(
    ofType(GO_TO_LOGIN_PAGE),
    mergeMap(action => of(push('/')))
);

export const goToProfilePageEpic = (
    action$: ActionsObservable<UserAuthSuccess>
) => action$.pipe(
    ofType(USER_AUTH_SUCCESS),
    mergeMap(action => of(push('/profile')))
);

export const registrationEpic = (
    action$: ActionsObservable<Registration>
) => action$.pipe(
    ofType(REGISTRATION),
    mergeMap((action: any) => API.registration(action.credentials).pipe(
        map(res => {
            const idToken = res.data.id_token;
            LocalStorage.setValue('id_token', idToken);
            return userAuthSuccess(idToken);
        }),
        catchError(error => of(userAuthFailure(error.message)))
    )),
);

export const loginEpic = (
    action$: ActionsObservable<Login>
) => action$.pipe(
    ofType(LOGIN),
    mergeMap((action: any) => API.login(action.credentials).pipe(
        map(res => {
            const idToken = res.data.id_token;
            LocalStorage.setValue('id_token', idToken);
            return userAuthSuccess(idToken);
        }),
        catchError(error => of(userAuthFailure(error.message)))
    )),
);
