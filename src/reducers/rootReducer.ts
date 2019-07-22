import {combineReducers, ReducersMapObject} from 'redux';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';
import {AuthPage, AuthPageState, Profile, State, TransactionsSortColumn} from '../typings/common';
import {authReducer} from './auth';
import {profileReducer} from './profile';

export const authPageState: AuthPageState = {
    page: AuthPage.LOGIN,
    credentials: {
        username: '',
        email: '',
        password: ''
    }
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
        suggestedUsersList: []
    },
    transactionsSortType: TransactionsSortColumn.Date
};

export const initialState: State = {
    auth: authPageState,
    profile: profileState
};

export type Reducers = ReducersMapObject<State>;
export type LoadedReducers = Partial<Reducers>;

export default (history: History) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    profile: profileReducer
});
