import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import {
    State,
    TransactionInfo,
    UserInfo,
} from '../../typings/common';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import {
    fetchProfileData,
    openTransactionModal,
    logout,
    changNameFilterText
} from '../../actions/profile';

const profilePageSelector = createSelector(
    (state: State): boolean => state.profile.isLoading,
    (state: State): UserInfo => state.profile.userInfo,
    (state: State): TransactionInfo[] => state.profile.transactionsInfo,
    (
        isLoading,
        userInfo,
        transactionsInfo
    ) => ({
        isLoading,
        userInfo,
        transactionsInfo
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
    logout: () => dispatch(logout()),
    changeFilterNameText: (text: string) => dispatch(changNameFilterText(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);
