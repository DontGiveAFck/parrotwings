import {
    createStore, combineReducers, Reducer, ReducersMapObject
} from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { DefaultState, State } from '../typings/state';
import { variableReducer } from './reducer';

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
