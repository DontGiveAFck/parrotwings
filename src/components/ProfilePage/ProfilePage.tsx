import React, { Component } from 'react';
import './ProfilePage.css';
import { cn } from '@bem-react/classname';
import {
    Container,
    Card,
    Icon,
    Button, Transition,
    Dimmer,
    Loader,
    Dropdown
} from 'semantic-ui-react';
import {
    TransactionInfo,
    TransactionModalData,
    TransactionsSortColumn,
    SortDirection,
    UserInfo
} from '../../typings/common';
import TransactionsInfo from '../TransactionsInfo/TransactionsInfo';
import TransactionModal from '../TransactionModal/TransactionModal';
import background from '../../assets/images/bg-pr.jpg';

const BLOCK = cn('ProfilePage');

interface ProfilePageProps {
    fetchProfileData: () => void;
    isLoading: boolean;
    userInfo: UserInfo;
    transactionsInfo: TransactionInfo[];
    transactionModalOpened: boolean;
    openTransactionModal: (name?: string, amount?: number) => void;
    closeTransactionModal: () => void;
    transactionModalData: TransactionModalData;
    changeTransactionName: (name: string) => void;
    changeTransactionAmount: (amount: number) => void;
    createTransaction: (name: string, amount: number) => void;
    logout: () => void;
    changeSortType: (column : TransactionsSortColumn) => void;
    sortDirection: SortDirection;
    sortColumn: TransactionsSortColumn;
}

class ProfilePage extends Component<ProfilePageProps> {
    componentDidMount(): void {
        const { fetchProfileData } = this.props;
        fetchProfileData();
    }

    render() {
        const {
            transactionModalOpened,
            closeTransactionModal,
            transactionModalData,
            changeTransactionName,
            changeTransactionAmount,
            createTransaction,
            transactionsInfo,
            openTransactionModal,
            isLoading,
            changeSortType,
            sortDirection,
            sortColumn
        } = this.props;

        return (
            <div
                className={BLOCK()}
            >
                <Dimmer active={isLoading}>
                    <Loader size="massive">Loading</Loader>
                </Dimmer>
                {!isLoading && (
                    <div
                        className={BLOCK('Container')}
                        style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <Container>
                            {this.getUserInfo()}
                            <TransactionsInfo
                                transactionsInfo={transactionsInfo}
                                openTransactionModal={openTransactionModal}
                                changeSortType={changeSortType}
                                sortDirection={sortDirection}
                                sortColumn={sortColumn}

                            />
                            <TransactionModal
                                transactionModalOpened={transactionModalOpened}
                                closeTransactionModal={closeTransactionModal}
                                transactionModalData={transactionModalData}
                                changeTransactionName={changeTransactionName}
                                changeTransactionAmount={changeTransactionAmount}
                                createTransaction={createTransaction}
                            />
                        </Container>
                    </div>
                )}
            </div>
        );
    }

    private getUserInfo = () => {
        const {
            userInfo, openTransactionModal, logout, fetchProfileData
        } = this.props;
        const {
            name,
            balance
        } = userInfo;
        return (
            <div className={BLOCK('UserInfo')}>
                <div className={BLOCK('Name')}>Name: <span className={BLOCK('NameValue')}>{name}</span></div>
                <div className={BLOCK('Balance')}>Balance: <span className={BLOCK('BalanceValue')}>{balance}</span> PW</div>
                <div className={BLOCK('SendButton')}>
                    <a onClick={() => openTransactionModal()}>
                        <Icon name="btc" />
                        <span>Create transaction</span>
                    </a>
                </div>
                <div className={BLOCK('SendButton')}>
                    <a onClick={() => fetchProfileData()}>
                        <Icon name="sync" />
                        <span>Update info</span>
                    </a>
                </div>
                <div className={BLOCK('Logout')}>
                    <a onClick={logout} className={BLOCK('LogoutElement')}>
                        <Icon name="power off" />
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        );
    };
}

export default ProfilePage;
