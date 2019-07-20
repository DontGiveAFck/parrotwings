import { push } from 'connected-react-router';
import { Reducer } from 'redux';
import { AuthPage, AuthPageState, State } from '../typings/common';
import { Action } from '../actions/action';
import { authPageState } from './rootReducer';
import { REGISTRATION_URL } from '../constants/urls';
import { GO_TO_REGISTRATION_PAGE } from '../actions/auth';

function goToRegistrationPage(
    state: AuthPageState,
    action: Action
): AuthPageState {
    return {
        ...state,
        page: AuthPage.REGISTRATION
    };
}

// TODO - избавиться от tsignore
// @ts-ignore
export const authReducer: Reducer<AuthPageState, Action> = (
    state: AuthPageState = authPageState,
    action: Action,
    fullState: State
): AuthPageState => {
    switch (action.type) {
        case GO_TO_REGISTRATION_PAGE:
            return goToRegistrationPage(state, action);
        default:
            return state;
    }
};
