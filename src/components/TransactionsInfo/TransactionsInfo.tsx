import React, { Component, ReactElement } from 'react';
import './TransactionsInfo.css';
import { cn } from '@bem-react/classname';
import { Button, Table, Header } from 'semantic-ui-react';
import { SortDirection, TransactionInfo, TransactionsSortColumn } from '../../typings/common';

const BLOCK = cn('TransactionsInfo');

interface TransactionsInfoProps {
    transactionsInfo: TransactionInfo[];
    openTransactionModal: (name: string, amount: number) => void;
    changeSortType: (column : TransactionsSortColumn) => void;
    sortDirection: SortDirection;
    sortColumn: TransactionsSortColumn;
    filterName: string;
}

class TransactionsInfo extends Component<TransactionsInfoProps> {
    render() {
        return (
            <div
                className={BLOCK()}
            >
                <Header as="h2" className={BLOCK('Title')}>
                    Transactions history
                </Header>
                <span className={BLOCK('Help')}>Click on header cells for sorting</span>
                {this.getTable()}
            </div>
        );
    }

    private getTableRow = (transactionRow: TransactionInfo): ReactElement => {
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

    private getTableEmptyRow = (): ReactElement => (
        <Table.Row>
            <Table.Cell>No transactions</Table.Cell>
        </Table.Row>
    );

    private getTable = () => {
        const { sortDirection, sortColumn } = this.props;
        const sortDirectionCell = sortDirection === SortDirection.ASC
            ? 'ascending'
            : 'descending';
        const filteredTransactions = this.getFilteredTransactions();

        return (
            <div className={BLOCK('Table')}>
                <Table selectable sortable celled compact fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={sortColumn === TransactionsSortColumn.Date
                                    ? sortDirectionCell
                                    : undefined}
                                onClick={() => this.handleSort(TransactionsSortColumn.Date)}
                            >
                                Date/Time
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={sortColumn === TransactionsSortColumn.Username
                                    ? sortDirectionCell
                                    : undefined}
                                onClick={() => this.handleSort(TransactionsSortColumn.Username)}
                            >
                                Correspondent name
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={sortColumn === TransactionsSortColumn.Amount
                                    ? sortDirectionCell
                                    : undefined}
                                onClick={() => this.handleSort(TransactionsSortColumn.Amount)}
                            >
                                Transaction amount
                            </Table.HeaderCell>
                            <Table.HeaderCell>Resulting balance</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {filteredTransactions.length === 0
                            ? this.getTableEmptyRow()
                            : filteredTransactions.map(row => this.getTableRow(row))}
                    </Table.Body>
                </Table>
            </div>

        );
    };

    private handleSort = (clickedColumn: TransactionsSortColumn): void => {
        const { changeSortType } = this.props;
        changeSortType(clickedColumn);
    };

    private getFilteredTransactions = (): TransactionInfo[] => {
        const { filterName, transactionsInfo } = this.props;
        return transactionsInfo.filter(transaction => transaction.username.includes(filterName));
    };
}

export default TransactionsInfo;
