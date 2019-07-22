import React, { Component } from 'react';
import './ProfilePage.css';
import { cn } from '@bem-react/classname';
import {
    Container,
    Card,
    Icon,
    Button
} from 'semantic-ui-react';
import {TransactionModalData, UserInfo} from '../../typings/common';
import TransactionsInfo from '../TransactionsInfo/TransactionsInfo';
import TransactionModal from '../TransactionModal/TransactionModal';

const BLOCK = cn('ProfilePage');

interface ProfilePageProps {
    fetchProfileData: () => void;
    isLoading: boolean;
    userInfo: UserInfo;
    transactionsInfo: any;
    transactionModalOpened: boolean;
    openTransactionModal: () => void;
    closeTransactionModal: () => void;
    transactionModalData: TransactionModalData;
    changeTransactionName: (name: string) => void;
    changeTransactionAmount: (amount: number) => void;
    createTransaction: (name: string, amount: number) => void;
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
            createTransaction
        } = this.props;

        return (
            <div
                className={BLOCK()}
            >
                <div className={BLOCK('Container')}>
                    <Container>
                        {this.getUserInfo()}
                        <TransactionsInfo />
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
            </div>
        );
    }

    private getUserInfo = () => {
        const { userInfo, openTransactionModal } = this.props;
        const {
            name,
            balance
        } = userInfo;
        return (
            <div className={BLOCK('UserInfo')}>
                <Card>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className="date">Parrot</span>
                        </Card.Meta>
                        <Card.Description>
                            <span className={BLOCK('Balance')}>
                                Balance:&nbsp;
                                { balance }
                                PW
                            </span>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <div>
                            <Button
                                color="instagram"
                                className="SendButton"
                                onClick={openTransactionModal}
                            > Send PW </Button>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name="power off" />
                            <span className={BLOCK('Logout')}>Logout</span>
                        </a>
                    </Card.Content>
                </Card>
            </div>
        );
    };
}

export default ProfilePage;
