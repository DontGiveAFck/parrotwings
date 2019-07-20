import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { State } from '../../typings/common';
import App, { AppProps } from '../../components/App/App';
import { changeVariable } from '../../actions/action';

const variableSelector = createSelector(
    (state: State): boolean => state,
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
    handleClick: (value: boolean) => dispatch(changeVariable(value))
});

export default connect<AppProps>(
    // @ts-ignore
    mapStateToProps,
    mapDispatchToProps
)(App);
