import React, { Component } from 'react';
import './TransactionModal.css';
import { cn } from '@bem-react/classname';
import {
    Modal, Button, Header, Icon, Form, Dropdown, Message
} from 'semantic-ui-react';
import { TransactionModalData } from '../../typings/common';
import { INTEGER_PATTERN } from '../../constants/constants';

const BLOCK = cn('TransactionModal');

interface TransactionModalProps {
    transactionModalOpened: boolean;
    closeTransactionModal: () => void;
    transactionModalData: TransactionModalData;
    changeTransactionName: (name: string) => void;
    changeTransactionAmount: (amount: number) => void;
    createTransaction: (name: string, amount: number) => void;
}

class TransactionModal extends Component<TransactionModalProps> {
    render() {
        const {
            transactionModalOpened,
            closeTransactionModal,
            transactionModalData,
            changeTransactionName
        } = this.props;
        const {
            name, amount, suggestedUsersList, isLoading, errorText = ''
        } = transactionModalData;

        return (
            <div
                className={BLOCK()}
            >
                <Modal open={transactionModalOpened} closeOnDocumentClick>
                    <Header icon="money" content="Create new transaction" />
                    <Modal.Content>
                        <Form error={Boolean(errorText)}>
                            <Form.Field>
                                <label htmlFor="dropdown">Name</label>
                                <Dropdown
                                    id="dropdown"
                                    placeholder="Write name and select user"
                                    fluid
                                    search
                                    selection
                                    onSearchChange={
                                        (e, value) => changeTransactionName(value.searchQuery)
                                    }
                                    options={suggestedUsersList}
                                    onChange={this.onSelectTransactionName.bind(this)}
                                    text={name}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="email-input">Amount</label>
                                <Form.Input
                                    value={amount || ''}
                                    placeholder="Amount"
                                    type="text"
                                    pattern="^-?[0-9]+$"
                                    onChange={e => this.onChangeTransactionAmount(e.target.value)}
                                />
                            </Form.Field>
                            <Message
                                error
                                header="Transaction error"
                                content={errorText}
                            />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color="red"
                            onClick={closeTransactionModal}
                            disabled={isLoading}
                        >
                            <Icon name="remove" />
                            Cancel
                        </Button>
                        <Button
                            color="green"
                            onClick={this.onConfirmButtonClick}
                            loading={isLoading}
                        >
                            <Icon name="checkmark" />
                            Confirm
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }


    private onConfirmButtonClick = () => {
        const { createTransaction, transactionModalData } = this.props;
        const { name, amount } = transactionModalData;
        createTransaction(name, amount);
    };

    private onSelectTransactionName = (e: any, { value } : any) => {
        const { changeTransactionName } = this.props;
        changeTransactionName(value);
    };

    private onChangeTransactionAmount = (value: string) => {
        const { changeTransactionAmount } = this.props;
        if (INTEGER_PATTERN.test(value)) {
            const numberValue = Number(value);
            if (numberValue < Number.MAX_SAFE_INTEGER) {
                changeTransactionAmount(Number(value));
            }
        }
    };
}

export default TransactionModal;
