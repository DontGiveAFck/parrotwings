import { ActionsObservable, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, forkJoin, concat } from 'rxjs';
import { Action } from '../actions/action';
import { REGISTRATION, userAuthFailure, userAuthSuccess } from '../actions/auth';
import API from '../api/api';
import LocalStorage from '../services/LocalStorage';
import {
    CHANGE_TRANSACTION_NAME,
    ChangeTransactionName, CREATE_TRANSACTION, CreateTransaction,
    FETCH_PROFILE_DATA, fetchProfileData, FetchProfileData,
    fetchProfileDataSuccess, updateSuggestedUsersList, createTransactionFailure,
    closeTransactionModal, LOGOUT, Logout
} from '../actions/profile';
import { mapUserInfo } from '../services/mappers';
import {push} from "connected-react-router";

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
            const transactionsInfo = res[1].data.trans_token;
            return fetchProfileDataSuccess(userInfo, transactionsInfo);
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

export const createTransactionEpic = (
    action$: ActionsObservable<CreateTransaction>
) => action$.pipe(
    ofType(CREATE_TRANSACTION),
    mergeMap((action: CreateTransaction) => API.createTransaction(action.name, action.amount).pipe(
        mergeMap(() => of(fetchProfileData(), closeTransactionModal())),
        // TODO - change error func
        catchError(error => of(createTransactionFailure(error.message)))
    )),
);

export const logoutEpic = (
    action$: ActionsObservable<Logout>
) => action$.pipe(
    ofType(LOGOUT),
    mergeMap(action => {
        LocalStorage.removeValue('id_token');
        return of(push('/'));
    })
);