import React, {Component, RefObject} from 'react';
import './TransactionModal.css';
import { cn } from '@bem-react/classname';
import {
    Modal, Button, Header, Icon, Input, Form, Dropdown, DropdownProps
} from 'semantic-ui-react';
import { AuthField, TransactionModalData } from '../../typings/common';

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

    private dropdownRef: RefObject<Component<DropdownProps, any, any>> = React.createRef();

    render() {
        const {
            transactionModalOpened,
            closeTransactionModal,
            transactionModalData,
            changeTransactionName,
            changeTransactionAmount,
            createTransaction
        } = this.props;
        const { name, amount, suggestedUsersList } = transactionModalData;

        // TODO - вынести отсюда и переделать

        const mappedUsersList = suggestedUsersList
        // @ts-ignore
            .map(user => ({ key: user.id, value: user.name, text: user.name }));
        return (
            <div
                className={BLOCK()}
            >
                <Modal open={transactionModalOpened} closeIcon closeOnDocumentClick>
                    <Header icon="archive" content="Archive Old Messages" />
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label htmlFor="email-input">Name</label>
                                <Dropdown
                                    placeholder="Select user"
                                    fluid
                                    search
                                    selection
                                    onSearchChange={
                                        (e, value) => changeTransactionName(value.searchQuery)
                                    }
                                    options={mappedUsersList}
                                    onChange={this.getValue.bind(this)}
                                    ref={this.dropdownRef}
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
                        <Button
                            color="green"
                            onClick={this.onConfirmButtonClick}
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

    private getValue = (e: any, { value } : any) => {
        const { changeTransactionName } = this.props;
        changeTransactionName(value);
    };
}

export default TransactionModal;
