import { push } from 'connected-react-router';
import { Reducer } from 'redux';
import { AuthState, State } from '../typings/common';
import { Action, CHANGE_VARIABLE } from '../actions/action';
import { defaultState } from './rootReducer';
import {REGISTRATION_URL} from "../constants/urls";

function goToRegistrationPage(
    state: AuthState,
    action: Action
): AuthState {
    push(REGISTRATION_URL);
    return {
        ...state,
    }
}

// TODO - избавиться от tsignore
// @ts-ignore
export const authReducer: Reducer<AuthState, Action> = (
    state: AuthState = defaultState,
    action: Action,
    fullState: State
): AuthState => {
    switch (action.type){
        case CHANGE_VARIABLE:
            return goToRegistrationPage(state, action);
        default:
            return state;
    }
};
