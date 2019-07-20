import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';
import { State } from '../../typings/common';
import LoginPage from '../../components/LoginPage/LoginPage';
import { changeVariable } from '../../actions/action';

const variableSelector = createSelector(
    (state: State): boolean => state.default.variable,
    variable => ({
        variable
    })
);

const mapStateToProps = (
    state: State
) => ({
    ...variableSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openRegistrationPageClick: (value: boolean) => dispatch(push('signup'))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(LoginPage);
