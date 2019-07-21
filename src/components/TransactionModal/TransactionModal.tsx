import React, { Component } from 'react';
import './TransactionModal.css';
import { cn } from '@bem-react/classname';
import {
    Modal, Button, Header, Icon, Input, Form, Dropdown
} from 'semantic-ui-react';
import { AuthField, TransactionModalData } from '../../typings/common';

const BLOCK = cn('TransactionModal');

interface TransactionModalProps {
    transactionModalOpened: boolean;
    closeTransactionModal: () => void;
    transactionModalData: TransactionModalData;
    changeTransactionName: (name: string) => void;
    changeTransactionAmount: (amount: number) => void;
}

class TransactionModal extends Component<TransactionModalProps> {
    render() {
        const {
            transactionModalOpened,
            closeTransactionModal,
            transactionModalData,
            changeTransactionName,
            changeTransactionAmount
        } = this.props;
        const { name, amount, suggestedUsersList } = transactionModalData;

        // TODO - вынести отсюда и переделать

        const mappedUsersList = suggestedUsersList
        // @ts-ignore
            .map(user => ({ key: user.id, value: user.id, text: user.name }));
        return (
            <div
                className={BLOCK()}
            >
                <Modal open={transactionModalOpened} closeIcon>
                    <Header icon="archive" content="Archive Old Messages" />
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label htmlFor="email-input">Name</label>
                                <Dropdown
                                    placeholder="Select Country"
                                    fluid
                                    search
                                    selection
                                    onSearchChange={
                                        (e, value) => changeTransactionName(value.searchQuery)
                                    }
                                    options={mappedUsersList}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="email-input">Amount</label>
                                <Form.Input
                                    value={amount}
                                    placeholder="Amount"
                                    onChange={e => changeTransactionAmount(Number(e.target.value))}
                                />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="red" onClick={closeTransactionModal}>
                            <Icon name="remove" />
                            Cancel
                        </Button>
                        <Button color="green">
                            <Icon name="checkmark" />
                            Confirm
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default TransactionModal;
