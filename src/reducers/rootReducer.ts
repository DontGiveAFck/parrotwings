import {
    createStore, combineReducers, Reducer, ReducersMapObject
} from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AuthPage, AuthPageState, State } from '../typings/common';
import { authReducer } from './auth';

export const authPageState: AuthPageState = {
    page: AuthPage.LOGIN,
    credentials: {
        username: '',
        email: '',
        password: ''
    }
};
export const initialState: State = {
    auth: authPageState
};

export type Reducers = ReducersMapObject<State>;
export type LoadedReducers = Partial<Reducers>;

export default (history: History) => combineReducers({
    router: connectRouter(history),
    auth: authReducer
});
