import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { push } from 'connected-react-router';
import { GO_TO_REGISTRATION_PAGE, GO_TO_LOGIN_PAGE, REGISTRATION } from '../actions/auth';
import API from '../api/api';

// @ts-ignore
export const goToRegistrationPage = action$ => action$.pipe(
    ofType(GO_TO_REGISTRATION_PAGE),
    mergeMap(action => of(push('/registration')))
);

// @ts-ignore
export const goToLoginPage = action$ => action$.pipe(
    ofType(GO_TO_LOGIN_PAGE),
    mergeMap(action => of(push('/')))
);

// @ts-ignore
export const login = action$ => action$.pipe(
    ofType(REGISTRATION),
    mergeMap((action: any) => {
        console.log(action)
        return API.registration(action.credentials);
    }),
    map(response => console.log(response))
);
