import { AuthState, State } from '../typings/common';
import { Action, CHANGE_VARIABLE } from '../actions/action';
import { defaultState } from './rootReducer';
import { Reducer } from 'redux';

function changeVariable(
    state: AuthState,
    action: Action
): AuthState {
    return {
        variable: action.value
    };
}

// TODO - избавиться от tsignore
// @ts-ignore
export const variableReducer: Reducer<AuthState, Action> = (
    state: AuthState = defaultState,
    action: Action,
    fullState: State
): AuthState => {
    switch (action.type){
    case CHANGE_VARIABLE:
        return changeVariable(state, action);
    default:
        return state;
    }
};
