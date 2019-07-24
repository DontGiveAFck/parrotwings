import { combineReducers, ReducersMapObject } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import {
    AuthPage, AuthPageState, Profile, SortDirection, State, TransactionsSortColumn
} from '../typings/common';
import { authReducer } from './auth';
import { profileReducer } from './profile';

export const authPageState: AuthPageState = {
    page: AuthPage.LOGIN,
    credentials: {
        username: '',
        email: '',
        password: '',
        rPassword: ''
    },
    isLoading: false
};

export const profileState: Profile = {
    userInfo: {
        name: '',
        balance: 0
    },
    transactionsInfo: [],
    isLoading: false,
    transactionModalOpened: false,
    transactionModalData: {
        name: '',
        amount: 0,
        suggestedUsersList: [],
        isLoading: false
    },
    sortColumn: TransactionsSortColumn.Date,
    sortDirection: SortDirection.DESC,
    filterName: ''
};

export const initialState: State = {
    auth: authPageState,
    profile: profileState
};

export type Reducers = ReducersMapObject<State>;

export default (history: History) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    profile: profileReducer
});
