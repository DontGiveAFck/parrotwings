import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';
import {
    AuthField,
    SortDirection,
    State,
    TransactionInfo,
    TransactionModalData,
    TransactionsSortColumn,
    UserInfo,
    UserRegistration
} from '../../typings/common';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import {
    closeTransactionModal,
    fetchProfileData,
    openTransactionModal,
    changeTransactionName,
    changeTransactionAmount,
    createTransaction, logout, changeSortOptions
} from '../../actions/profile';

// TODO - разделить селекторы
const profilePageSelector = createSelector(
    (state: State): boolean => state.profile.isLoading,
    (state: State): UserInfo => state.profile.userInfo,
    (state: State): TransactionInfo[] => state.profile.transactionsInfo,
    (state: State): boolean => state.profile.transactionModalOpened,
    (state: State): TransactionModalData => state.profile.transactionModalData,
    (state: State): SortDirection => state.profile.sortDirection,
    (state: State): TransactionsSortColumn => state.profile.sortColumn,
    (
        isLoading,
        userInfo,
        transactionsInfo,
        transactionModalOpened,
        transactionModalData,
        sortDirection,
        sortColumn
    ) => ({
        isLoading,
        userInfo,
        transactionsInfo,
        transactionModalOpened,
        transactionModalData,
        sortDirection,
        sortColumn
    })
);

const mapStateToProps = (
    state: State
) => ({
    ...profilePageSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    fetchProfileData: () => dispatch(fetchProfileData()),
    openTransactionModal:
        (name?: string, amount?: number) => dispatch(openTransactionModal(name, amount)),
    closeTransactionModal: () => dispatch(closeTransactionModal()),
    changeTransactionName: (name: string) => dispatch(changeTransactionName(name)),
    changeTransactionAmount: (amount: number) => dispatch(changeTransactionAmount(amount)),
    createTransaction: (name: string, amount: number) => dispatch(createTransaction(name, amount)),
    logout: () => dispatch(logout()),
    changeSortType: (column : TransactionsSortColumn) => dispatch(changeSortOptions(column))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(ProfilePage);
