import { ActionsObservable, ofType } from 'redux-observable';
import {
    catchError, map, mergeMap
} from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { push } from 'connected-react-router';
import { userAuthFailure } from '../actions/auth';
import API from '../api/api';
import LocalStorage from '../services/LocalStorage';
import {
    CHANGE_TRANSACTION_NAME,
    ChangeTransactionName,
    CREATE_TRANSACTION,
    CreateTransaction,
    FETCH_PROFILE_DATA,
    fetchProfileData,
    FetchProfileData,
    fetchProfileDataSuccess,
    updateSuggestedUsersList,
    createTransactionFailure,
    closeTransactionModal,
    LOGOUT,
    Logout,
    logout,
    FetchProfileDataSuccess,
    FETCH_PROFILE_DATA_SUCCESS,
    changeSortOptions
} from '../actions/profile';
import { mapUserInfo } from '../services/mappers';
import { TransactionsSortColumn } from '../typings/common';

export const fetchProfileDataEpic = (
    action$: ActionsObservable<FetchProfileData>
) => action$.pipe(
    ofType(FETCH_PROFILE_DATA),
    mergeMap((action: FetchProfileData) => {
        const tokenId = LocalStorage.getValue('id_token') || '';
        return forkJoin(
            API.getUserInfo(tokenId),
            API.getTransactions(tokenId)
        ).pipe(
            map(res => {
                const userInfo = mapUserInfo(res[0].data.user_info_token);
                const transactionsInfo = res[1].data.trans_token;
                return fetchProfileDataSuccess(userInfo, transactionsInfo);
            }),
            catchError(error => of(logout(), push('/'), userAuthFailure(error.message)))
        );
    }),
);

export const fetchFilteredUsersListEpic = (
    action$: ActionsObservable<ChangeTransactionName>
) => action$.pipe(
    ofType(CHANGE_TRANSACTION_NAME),
    mergeMap((action: ChangeTransactionName) => {
        const tokenId = LocalStorage.getValue('id_token') || '';
        return API.getFilteredUsersList(action.name, tokenId).pipe(
            map(res => updateSuggestedUsersList(res.data)),
            catchError(error => of(createTransactionFailure(error.message)))
        );
    }),
);

export const createTransactionEpic = (
    action$: ActionsObservable<CreateTransaction>
) => action$.pipe(
    ofType(CREATE_TRANSACTION),
    mergeMap((action: CreateTransaction) => {
        if (action.amount <= 0) {
            return of(createTransactionFailure('Amount field can\'t be empty'));
        }
        const tokenId = LocalStorage.getValue('id_token') || '';
        return API.createTransaction(action.name, action.amount, tokenId).pipe(
            mergeMap(() => of(fetchProfileData(), closeTransactionModal())),
            catchError(error => of(createTransactionFailure(error.message)))
        );
    })
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

export const fetchProfileDataSuccessEpic = (
    action$: ActionsObservable<FetchProfileDataSuccess>,
) => action$.pipe(
    ofType(FETCH_PROFILE_DATA_SUCCESS),
    mergeMap(action => of(changeSortOptions(TransactionsSortColumn.Date, true)))
);
