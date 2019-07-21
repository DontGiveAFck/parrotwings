import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';
import {
    AuthField, State, TransactionModalData, UserInfo, UserRegistration
} from '../../typings/common';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import { closeTransactionModal, fetchProfileData, openTransactionModal, changeTransactionName, changeTransactionAmount } from '../../actions/profile';


// TODO - разделить селекторы
const profilePageSelector = createSelector(
    // @ts-ignore
    (state: State): boolean => state.profile.isLoading,
    (state: State): UserInfo => state.profile.userInfo,
    (state: State): string => state.profile.transactionsInfo,
    (state: State): boolean => state.profile.transactionModalOpened,
    (state: State): TransactionModalData => state.profile.transactionModalData,
    (
        isLoading,
        userInfo,
        transactionsInfo,
        transactionModalOpened,
        transactionModalData
    ) => ({
        isLoading,
        userInfo,
        transactionsInfo,
        transactionModalOpened,
        transactionModalData
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
    openTransactionModal: () => dispatch(openTransactionModal()),
    closeTransactionModal: () => dispatch(closeTransactionModal()),
    changeTransactionName: (name: string) => dispatch(changeTransactionName(name)),
    changeTransactionAmount: (amount: number) => dispatch(changeTransactionAmount(amount))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(ProfilePage);
