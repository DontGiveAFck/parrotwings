import { ActionsObservable, ofType } from 'redux-observable';
import {
    mergeMap, map, catchError, switchMap
} from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { push } from 'connected-react-router';
import {
    GO_TO_REGISTRATION_PAGE,
    GO_TO_LOGIN_PAGE,
    REGISTRATION,
    userAuthSuccess,
    userAuthFailure, USER_AUTH_SUCCESS, LOGIN
} from '../actions/auth';
import API from '../api/api';
import LocalStorage from '../services/LocalStorage';
import { Action } from '../actions/action';

export const goToRegistrationPage = (
    action$: ActionsObservable<Action>
) => action$.pipe(
    ofType(GO_TO_REGISTRATION_PAGE),
    mergeMap(action => of(push('/registration')))
);

export const goToLoginPage = (
    action$: ActionsObservable<Action>
) => action$.pipe(
    ofType(GO_TO_LOGIN_PAGE),
    mergeMap(action => of(push('/')))
);

export const goToProfilePage = (
    action$: ActionsObservable<Action>
) => action$.pipe(
    ofType(USER_AUTH_SUCCESS),
    mergeMap(action => of(push('/profile')))
);

export const registrationEpic = (
    action$: ActionsObservable<Action>
) => action$.pipe(
    ofType(REGISTRATION),
    mergeMap((action: any) => API.registration(action.credentials).pipe(
        map(res => {
            const idToken = res.data.id_token;
            LocalStorage.setValue('id_token', idToken);
            return userAuthSuccess(idToken);
        }),
        catchError(error => of(userAuthFailure(error.toString())))
    )),
);

export const loginEpic = (
    action$: ActionsObservable<Action>
) => action$.pipe(
    ofType(LOGIN),
    mergeMap((action: any) => API.login(action.credentials).pipe(
        map(res => {
            const idToken = res.data.id_token;
            LocalStorage.setValue('id_token', idToken);
            return userAuthSuccess(idToken);
        }),
        catchError(error => of(userAuthFailure(error.toString())))
    )),
);
