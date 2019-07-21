import { Reducer } from 'redux';
import {
    CHANGE_TRANSACTION_NAME, ChangeTransactionAmount, ChangeTransactionName,
    CLOSE_TRANSACTION_MODAL, CloseTransactionModal,
    FETCH_PROFILE_DATA_SUCCESS,
    FetchProfileDataSuccess,
    CHANGE_TRANSACTION_AMOUNT,
    OPEN_TRANSACTION_MODAL,
    OpenTransactionModal, UPDATE_SUGGESTED_USERS_LIST, UpdateSuggestedUsersList
} from '../actions/profile';
import { AuthPageState, Profile, State } from '../typings/common';
import { Action } from '../actions/action';
import { profileState } from './rootReducer';

function fetchProfileDataSuccess(
    state: Profile,
    action: FetchProfileDataSuccess
): Profile {
    const { userInfo } = action;

    return {
        ...state,
        userInfo: {
            ...userInfo
        },
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
            return updateSuggestedUsersList(state, action)
        default:
            return state;
    }
};
