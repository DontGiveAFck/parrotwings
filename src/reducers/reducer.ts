import { DefaultState, State } from '../types/state';
import { Action, CHANGE_VARIABLE } from '../actions/action';
import { defaultState } from './rootReducer';
import { Reducer } from 'redux';

function changeVariable(
    state: DefaultState,
    action: Action
): DefaultState {
    return {
        variable: action.value
    };
}

// TODO - избавиться от tsignore
// @ts-ignore
export const variableReducer: Reducer<DefaultState, Action> = (
    state: DefaultState = defaultState,
    action: Action,
    fullState: State
): DefaultState => {
    switch (action.type){
    case CHANGE_VARIABLE:
        return changeVariable(state, action);
    default:
        return state;
    }
};
