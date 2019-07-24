import * as _ from 'lodash';

import { Reducer } from 'redux';
import {
    CHANGE_SORT_OPTIONS,
    CHANGE_TRANSACTION_AMOUNT,
    CHANGE_TRANSACTION_NAME,
    ChangeSortOptions,
    ChangeTransactionAmount,
    ChangeTransactionName,
    CLOSE_TRANSACTION_MODAL,
    CloseTransactionModal,
    CREATE_TRANSACTION_FAILURE,
    CreateTransactionFailure,
    FETCH_PROFILE_DATA,
    FETCH_PROFILE_DATA_SUCCESS,
    FetchProfileData,
    FetchProfileDataSuccess,
    OPEN_TRANSACTION_MODAL,
    OpenTransactionModal,
    UPDATE_SUGGESTED_USERS_LIST,
    UpdateSuggestedUsersList
} from '../actions/profile';
import {
    Profile, SortDirection, TransactionInfo
} from '../typings/common';
import { Action } from '../actions/action';
import { profileState } from './rootReducer';
import { mapSuggestedUsersList } from '../services/mappers';

function fetchProfileDataSuccess(
    state: Profile,
    action: FetchProfileDataSuccess
): Profile {
    const { userInfo, transactionsInfo } = action;
    transactionsInfo.sort(
        (a: TransactionInfo, b: TransactionInfo) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return {
        ...state,
        userInfo,
        transactionsInfo,
        isLoading: false
    };
}

function openTransactionModal(
    state: Profile,
    action: OpenTransactionModal
): Profile {
    return {
        ...state,
        transactionModalOpened: true,
        transactionModalData: {
            name: action.name || '',
            amount: action.amount || 0,
            suggestedUsersList: []
        }
    };
}

function closeTransactionModal(
    state: Profile,
    action: CloseTransactionModal
): Profile {
    return {
        ...state,
        transactionModalOpened: false
    };
}

function changeTransactionAmount(
    state: Profile,
    action: ChangeTransactionAmount
): Profile {
    return {
        ...state,
        transactionModalData: {
            ...state.transactionModalData,
            amount: action.amount
        }
    };
}

function changeTransactionName(
    state: Profile,
    action: ChangeTransactionName
): Profile {
    return {
        ...state,
        transactionModalData: {
            ...state.transactionModalData,
            name: action.name
        }
    };
}

function updateSuggestedUsersList(
    state: Profile,
    action: UpdateSuggestedUsersList
): Profile {
    const { suggestedUsersList } = action;

    return {
        ...state,
        transactionModalData: {
            ...state.transactionModalData,
            suggestedUsersList: mapSuggestedUsersList(suggestedUsersList)
        }
    };
}

function createTransactionFailure(
    state: Profile,
    action: CreateTransactionFailure
): Profile {
    return {
        ...state,
        transactionModalData: {
            ...state.transactionModalData,
            errorText: action.errorText
        }
    };
}

function fetchProfileData(
    state: Profile,
    action: FetchProfileData
): Profile {
    return {
        ...state,
        isLoading: true
    };
}

function changeSortOptions(
    state: Profile,
    action: ChangeSortOptions
): Profile {
    const { column: clickedColumn } = action;
    const { transactionsInfo, sortColumn, sortDirection } = state;

    if (sortColumn !== clickedColumn) {
        return {
            ...state,
            sortColumn: clickedColumn,
            transactionsInfo: _.sortBy(transactionsInfo, [clickedColumn]),
            sortDirection: SortDirection.ASC
        };
    }

    const newTransactionsInfo = [...transactionsInfo].reverse();
    return {
        ...state,
        transactionsInfo: newTransactionsInfo,
        sortDirection: sortDirection === SortDirection.ASC
            ? SortDirection.DESC
            : SortDirection.ASC
    };
}

export const profileReducer: Reducer<Profile, Action> = (
    state: Profile = profileState,
    action: Action
): Profile => {
    switch (action.type) {
        case FETCH_PROFILE_DATA_SUCCESS:
            return fetchProfileDataSuccess(state, action);
        case OPEN_TRANSACTION_MODAL:
            return openTransactionModal(state, action);
        case CLOSE_TRANSACTION_MODAL:
            return closeTransactionModal(state, action);
        case CHANGE_TRANSACTION_NAME:
            return changeTransactionName(state, action);
        case CHANGE_TRANSACTION_AMOUNT:
            return changeTransactionAmount(state, action);
        case UPDATE_SUGGESTED_USERS_LIST:
            return updateSuggestedUsersList(state, action);
        case CREATE_TRANSACTION_FAILURE:
            return createTransactionFailure(state, action);
        case FETCH_PROFILE_DATA:
            return fetchProfileData(state, action);
        case CHANGE_SORT_OPTIONS:
            return changeSortOptions(state, action);
        default:
            return state;
    }
};
