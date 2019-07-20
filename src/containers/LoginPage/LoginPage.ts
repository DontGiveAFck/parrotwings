import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';
import { State } from '../../typings/common';
import LoginPage from '../../components/LoginPage/LoginPage';
import { goToRegistrationPage } from '../../actions/auth';

// const variableSelector = createSelector(
//     (state: State): boolean => state.default.variable,
//     variable => ({
//         variable
//     })
// );

const mapStateToProps = (
    state: State
) => ({
    // ...variableSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openRegistrationPageClick: () => dispatch(goToRegistrationPage())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(LoginPage);
