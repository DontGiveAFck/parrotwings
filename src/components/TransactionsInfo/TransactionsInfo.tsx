import React, { Component } from 'react';
import './TransactionsInfo.css';
import { cn } from '@bem-react/classname';
import {
    Container,
    Transition,
    Card,
    Icon,
    Table,
    Button
} from 'semantic-ui-react';
import background from '../../assets/images/profile-bg.jpg';
import { TransactionInfo, UserInfo } from '../../typings/common';

const BLOCK = cn('TransactionsInfo');

interface TransactionsInfoProps {
    transactionsInfo: TransactionInfo[];
    openTransactionModal: (name: string, amount: number) => void;
}

class TransactionsInfo extends Component<TransactionsInfoProps> {
    render() {
        return (
            <div
                className={BLOCK()}
            >
                {this.getTable()}
            </div>
        );
    }

    private getTableRow = (transactionRow: TransactionInfo) => {
        const {
            id,
            balance,
            amount,
            date,
            username
        } = transactionRow;

        const { openTransactionModal } = this.props;

        return (
            <Table.Row key={id} positive={amount > 0} negative={amount < 0}>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{amount} PW</Table.Cell>
                <Table.Cell>{balance} PW</Table.Cell>
                <Table.Cell>
                    <Button
                        color="green"
                        onClick={() => openTransactionModal(username, Math.abs(amount))}
                    >
                        Use as template
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    };

    private getTableEmptyRow = () => (
        <Table.Row>
            <Table.Cell>No transactions</Table.Cell>
        </Table.Row>
    );

    private getTable = () => {
        const { transactionsInfo } = this.props;
        return (
            <Table selectable textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date/Time of the transaction</Table.HeaderCell>
                        <Table.HeaderCell>Correspondent name</Table.HeaderCell>
                        <Table.HeaderCell>Transaction amount</Table.HeaderCell>
                        <Table.HeaderCell>Resulting balance</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {transactionsInfo.length === 0
                        ? this.getTableEmptyRow()
                        : transactionsInfo.map(row => this.getTableRow(row))}
                </Table.Body>
            </Table>
        );
    };
}

export default TransactionsInfo;
