import { ActionsObservable, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { Action } from '../actions/action';
import { REGISTRATION, userAuthFailure, userAuthSuccess } from '../actions/auth';
import API from '../api/api';
import LocalStorage from '../services/LocalStorage';
import {
    CHANGE_TRANSACTION_NAME,
    ChangeTransactionName,
    FETCH_PROFILE_DATA, FetchProfileData,
    fetchProfileDataSuccess, updateSuggestedUsersList
} from '../actions/profile';
import { mapUserInfo } from '../services/mappers';

export const fetchProfileDataEpic = (
    action$: ActionsObservable<FetchProfileData>
) => action$.pipe(
    ofType(FETCH_PROFILE_DATA),
    mergeMap((action: FetchProfileData) => forkJoin(
        API.getUserInfo(),
        API.getTransactions()
    ).pipe(
        map(res => {
            const userInfo = mapUserInfo(res[0].data.user_info_token);
            return fetchProfileDataSuccess(userInfo, {});
        }),
        // TODO - change error func
        catchError(error => of(userAuthFailure(error.message)))
    )),
);

export const fetchFilteredUsersListEpic = (
    action$: ActionsObservable<ChangeTransactionName>
) => action$.pipe(
    ofType(CHANGE_TRANSACTION_NAME),
    mergeMap((action: ChangeTransactionName) => API.getFilteredUsersList(action.name).pipe(
        map(res => updateSuggestedUsersList(res.data)),
        // TODO - change error func
        catchError(error => of(userAuthFailure(error.message)))
    )),
);

