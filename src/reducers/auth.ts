import { DefaultState, State } from '../typings/state';
import { Action, CHANGE_VARIABLE } from '../actions/action';
import { defaultState } from './rootReducer';
import { Reducer } from 'redux';

function goToRegistrationPage(
    state: DefaultState,
    action: Action
): DefaultState {
    return state;
}

// TODO - избавиться от tsignore
// @ts-ignore
export const authReducer: Reducer<DefaultState, Action> = (
    state: DefaultState = defaultState,
    action: Action,
    fullState: State
): DefaultState => {
    switch (action.type){
        case CHANGE_VARIABLE:
            return goToRegistrationPage(state, action);
        default:
            return state;
    }
};
