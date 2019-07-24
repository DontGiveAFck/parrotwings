import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import {
    SortDirection,
    State,
    TransactionInfo,
    TransactionsSortColumn,
} from '../../typings/common';
import {
    openTransactionModal,
    changeSortOptions
} from '../../actions/profile';
import TransactionsInfo from '../../components/TransactionsInfo/TransactionsInfo';

const transactionsInfoSelector = createSelector(
    (state: State): TransactionInfo[] => state.profile.transactionsInfo,
    (state: State): SortDirection => state.profile.sortDirection,
    (state: State): TransactionsSortColumn => state.profile.sortColumn,
    (
        transactionsInfo,
        sortDirection,
        sortColumn
    ) => ({
        transactionsInfo,
        sortDirection,
        sortColumn
    })
);

const mapStateToProps = (
    state: State
) => ({
    ...transactionsInfoSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    openTransactionModal:
        (name?: string, amount?: number) => dispatch(openTransactionModal(name, amount)),
    changeSortType: (column : TransactionsSortColumn) => dispatch(changeSortOptions(column))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionsInfo);
