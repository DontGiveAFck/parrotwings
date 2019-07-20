import { createStore, combineReducers, Reducer, ReducersMapObject } from 'redux';
import { History } from 'history';
import { DefaultState, State } from '../types/state';
import { variableReducer } from './reducer';
import { connectRouter } from 'connected-react-router';
import { Action } from '../actions/action';

export const defaultState = {
    variable: true
};
export const initialState: State = {
    default: defaultState
};

export type Reducers = ReducersMapObject<State>;
export type LoadedReducers = Partial<Reducers>;

export default (history: History) => combineReducers({
    router: connectRouter(history),
    default: variableReducer
});
