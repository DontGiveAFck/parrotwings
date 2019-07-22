import React, { Component } from 'react';
import './TransactionsInfo.css';
import { cn } from '@bem-react/classname';
import {
    Container,
    Transition,
    Card,
    Icon,
    Table
} from 'semantic-ui-react';
import background from '../../assets/images/profile-bg.jpg';
import { UserInfo } from '../../typings/common';

const BLOCK = cn('TransactionsInfo');

interface TransactionsInfoProps {
}

class TransactionsInfo extends Component<TransactionsInfoProps> {
    state = {
        componentVisibile: false
    };

    componentDidMount(): void {
    }

    render() {
        const { componentVisibile } = this.state;

        return (
            <div
                className={BLOCK()}
            >
                {this.getTable()}
            </div>
        );
    }

    private getTableRow = () => {

    }

    private getTable = () => {
        return (
            <Table striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Date Joined</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Called</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };
}

export default TransactionsInfo;
