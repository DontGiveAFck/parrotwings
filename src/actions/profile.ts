import { TransactionInfo, TransactionsSortColumn, UserInfo } from '../typings/common';

export const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA';
type FETCH_PROFILE_DATA = typeof FETCH_PROFILE_DATA;

export interface FetchProfileData {
    type: FETCH_PROFILE_DATA;
}

export function fetchProfileData(
): FetchProfileData {
    return {
        type: FETCH_PROFILE_DATA,
    };
}

export const FETCH_PROFILE_DATA_SUCCESS = 'FETCH_PROFILE_DATA_SUCCESS';
type FETCH_PROFILE_DATA_SUCCESS = typeof FETCH_PROFILE_DATA_SUCCESS;

export interface FetchProfileDataSuccess {
    type: FETCH_PROFILE_DATA_SUCCESS;
    userInfo: UserInfo;
    transactionsInfo: TransactionInfo[];
}

export function fetchProfileDataSuccess(
    userInfo: UserInfo,
    transactionsInfo: TransactionInfo[]
): FetchProfileDataSuccess {
    return {
        type: FETCH_PROFILE_DATA_SUCCESS,
        userInfo,
        transactionsInfo
    };
}

export const FETCH_PROFILE_DATA_FAILURE = 'FETCH_PROFILE_DATA_FAILURE';
type FETCH_PROFILE_DATA_FAILURE = typeof FETCH_PROFILE_DATA_FAILURE;

export interface FetchProfileDataFailure {
    type: FETCH_PROFILE_DATA_FAILURE;
}

export function fetchProfileDataFailure(
): FetchProfileDataFailure {
    return {
        type: FETCH_PROFILE_DATA_FAILURE,
    };
}

export const OPEN_TRANSACTION_MODAL = 'OPEN_TRANSACTION_MODAL';
type OPEN_TRANSACTION_MODAL = typeof OPEN_TRANSACTION_MODAL;

export interface OpenTransactionModal {
    type: OPEN_TRANSACTION_MODAL;
    name?: string;
    amount?: number;
}

export function openTransactionModal(
    name?: string,
    amount?: number
): OpenTransactionModal {
    return {
        type: OPEN_TRANSACTION_MODAL,
        name,
        amount
    };
}

export const CLOSE_TRANSACTION_MODAL = 'CLOSE_TRANSACTION_MODAL';
type CLOSE_TRANSACTION_MODAL = typeof CLOSE_TRANSACTION_MODAL;

export interface CloseTransactionModal {
    type: CLOSE_TRANSACTION_MODAL;
    name?: string;
    amount?: number;
}

export function closeTransactionModal(
    name?: string,
    amount?: number
): CloseTransactionModal {
    return {
        type: CLOSE_TRANSACTION_MODAL,
        name,
        amount
    };
}

export const CHANGE_TRANSACTION_NAME = 'CHANGE_TRANSACTION_NAME';
type CHANGE_TRANSACTION_NAME = typeof CHANGE_TRANSACTION_NAME;

export interface ChangeTransactionName {
    type: CHANGE_TRANSACTION_NAME;
    name: string;
}

export function changeTransactionName(
    name: string,
): ChangeTransactionName {
    return {
        type: CHANGE_TRANSACTION_NAME,
        name
    };
}

export const UPDATE_SUGGESTED_USERS_LIST = 'UPDATE_SUGGESTED_USERS_LIST';
type UPDATE_SUGGESTED_USERS_LIST = typeof UPDATE_SUGGESTED_USERS_LIST;

export interface UpdateSuggestedUsersList {
    type: UPDATE_SUGGESTED_USERS_LIST;
    suggestedUsersList: []
}

export function updateSuggestedUsersList(
    suggestedUsersList: [],
): UpdateSuggestedUsersList {
    return {
        type: UPDATE_SUGGESTED_USERS_LIST,
        suggestedUsersList
    };
}

export const CHANGE_TRANSACTION_AMOUNT = 'CHANGE_TRANSACTION_AMOUNT';
type CHANGE_TRANSACTION_AMOUNT = typeof CHANGE_TRANSACTION_AMOUNT;

export interface ChangeTransactionAmount {
    type: CHANGE_TRANSACTION_AMOUNT;
    amount: number;
}

export function changeTransactionAmount(
    amount: number
): ChangeTransactionAmount {
    return {
        type: CHANGE_TRANSACTION_AMOUNT,
        amount
    };
}

export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
type CREATE_TRANSACTION = typeof CREATE_TRANSACTION;

export interface CreateTransaction {
    type: CREATE_TRANSACTION;
    name: string;
    amount: number;
}

export function createTransaction(
    name: string,
    amount: number
): CreateTransaction {
    return {
        type: CREATE_TRANSACTION,
        name,
        amount
    };
}

export const LOGOUT = 'LOGOUT';
type LOGOUT = typeof LOGOUT;

export interface Logout {
    type: LOGOUT;
}

export function logout(
): Logout {
    return {
        type: LOGOUT,
    };
}

export const CREATE_TRANSACTION_FAILURE = 'CREATE_TRANSACTION_FAILURE';
type CREATE_TRANSACTION_FAILURE = typeof CREATE_TRANSACTION_FAILURE;

export interface CreateTransactionFailure {
    type: CREATE_TRANSACTION_FAILURE;
    errorText: string;
}

export function createTransactionFailure(
    errorText: string
): CreateTransactionFailure {
    return {
        type: CREATE_TRANSACTION_FAILURE,
        errorText
    };
}

export const CHANGE_SORT_OPTIONS = 'CHANGE_SORT_OPTIONS';
type CHANGE_SORT_OPTIONS = typeof CHANGE_SORT_OPTIONS;

export interface ChangeSortOptions {
    type: CHANGE_SORT_OPTIONS;
    column: TransactionsSortColumn;
    isDefault?: boolean;
}

export function changeSortOptions(
    column: TransactionsSortColumn,
    isDefault?: boolean
): ChangeSortOptions {
    return {
        type: CHANGE_SORT_OPTIONS,
        column,
        isDefault
    };
}

export const CHANGE_NAME_FILTER_TEXT = 'CHANGE_NAME_FILTER_TEXT';
type CHANGE_NAME_FILTER_TEXT = typeof CHANGE_NAME_FILTER_TEXT;

export interface ChangeNameFilterText {
    type: CHANGE_NAME_FILTER_TEXT;
    text: string;
}

export function changNameFilterText(
    text: string,
): ChangeNameFilterText {
    return {
        type: CHANGE_NAME_FILTER_TEXT,
        text,
    };
}
