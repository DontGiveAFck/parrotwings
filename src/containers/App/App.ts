import {State} from "../../types/state";
import {connect} from "react-redux";
import App, {AppProps} from "../../components/App/App";
import {Dispatch} from "redux";
import {changeVariable} from "../../actions/action";
import { createSelector } from 'reselect'

const variableSelector = createSelector(
    (state: State): boolean => state.default.variable,
    (variable) => ({
        variable
    })
);

const mapStateToProps = (
    state: State
) => {
    return {
        ...variableSelector(state)
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch
) => {
    return {
        handleClick: (value: boolean) => dispatch(changeVariable(value))
    };
};

export default connect<AppProps>(
    // @ts-ignore
    mapStateToProps,
    mapDispatchToProps
)(App);
