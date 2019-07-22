import { Reducer } from 'redux';
import {
    CHANGE_TRANSACTION_NAME,
    ChangeTransactionAmount,
    ChangeTransactionName,
    CLOSE_TRANSACTION_MODAL,
    CloseTransactionModal,
    FETCH_PROFILE_DATA_SUCCESS,
    FetchProfileDataSuccess,
    CHANGE_TRANSACTION_AMOUNT,
    CREATE_TRANSACTION_FAILURE,
    OPEN_TRANSACTION_MODAL,
    OpenTransactionModal,
    UPDATE_SUGGESTED_USERS_LIST,
    UpdateSuggestedUsersList,
    CreateTransactionFailure,
    FetchProfileData, FETCH_PROFILE_DATA
} from '../actions/profile';
import {AuthPageState, Profile, State, TransactionInfo} from '../typings/common';
import { Action } from '../actions/action';
import { profileState } from './rootReducer';

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
    return {
        ...state,
        transactionModalData: {
            ...state.transactionModalData,
            suggestedUsersList: action.suggestedUsersList
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


// TODO - избавиться от tsignore
// @ts-ignore
export const profileReducer: Reducer<Profile, Action> = (
    state: Profile = profileState,
    action: Action,
    fullState: State
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
        default:
            return state;
    }
};