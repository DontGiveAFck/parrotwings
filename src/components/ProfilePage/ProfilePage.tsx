import React, { Component } from 'react';
import './ProfilePage.css';
import { cn } from '@bem-react/classname';
import {
    Container,
    Icon,
    Dimmer,
    Loader,
    Input
} from 'semantic-ui-react';
import {
    TransactionInfo,
    UserInfo
} from '../../typings/common';
import TransactionsInfoCointainer from '../../containers/TransactionsInfoContainer/TransactionsInfoContainer';
import TransactionModalContainer from '../../containers/TransactionModalContainer/TransactionModalContainer';
import background from '../../assets/images/bg-pr.jpg';

const BLOCK = cn('ProfilePage');

interface ProfilePageProps {
    fetchProfileData: () => void;
    isLoading: boolean;
    userInfo: UserInfo;
    transactionsInfo: TransactionInfo[];
    openTransactionModal: (name?: string, amount?: number) => void;
    logout: () => void;
    changeFilterNameText: (text: string) => void;
}

class ProfilePage extends Component<ProfilePageProps> {
    componentDidMount(): void {
        const { fetchProfileData } = this.props;
        fetchProfileData();
    }

    render() {
        const {
            isLoading,
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
                            <TransactionsInfoCointainer />
                            <TransactionModalContainer />
                            {this.getFilterByNameField()}
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

    private getFilterByNameField = () => {
        const { changeFilterNameText } = this.props;

        return (
            <div className={BLOCK('NameFilter')}>
                <Input
                    placeholder="Enter name for filter"
                    onChange={e => changeFilterNameText(e.target.value)}
                />
            </div>
        );
    };
}

export default ProfilePage;
