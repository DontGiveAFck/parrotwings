import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import {
    State,
    TransactionModalData
} from '../../typings/common';
import {
    closeTransactionModal,
    changeTransactionName,
    changeTransactionAmount,
    createTransaction
} from '../../actions/profile';
import TransactionModal from '../../components/TransactionModal/TransactionModal';

const transactionModalSelector = createSelector(
    (state: State): boolean => state.profile.transactionModalOpened,
    (state: State): TransactionModalData => state.profile.transactionModalData,
    (
        transactionModalOpened,
        transactionModalData
    ) => ({
        transactionModalOpened,
        transactionModalData
    })
);

const mapStateToProps = (
    state: State
) => ({
    ...transactionModalSelector(state)
});

const mapDispatchToProps = (
    dispatch: Dispatch
) => ({
    closeTransactionModal: () => dispatch(closeTransactionModal()),
    changeTransactionName: (name: string) => dispatch(changeTransactionName(name)),
    changeTransactionAmount: (amount: number) => dispatch(changeTransactionAmount(amount)),
    createTransaction: (name: string, amount: number) => dispatch(createTransaction(name, amount))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionModal);
