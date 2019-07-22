import {TransactionsSortColumn, TransactionsSortType} from "../typings/common";

export const sortColumnsOptions = [
    {
        key: TransactionsSortColumn.Date,
        value: TransactionsSortColumn.Date,
        text: TransactionsSortColumn.Date
    },
    {
        key: TransactionsSortColumn.Name,
        value: TransactionsSortColumn.Name,
        text: TransactionsSortColumn.Name
    },
    {
        key: TransactionsSortColumn.Amount,
        value: TransactionsSortColumn.Amount,
        text: TransactionsSortColumn.Amount
    }
];

export const sortTypesOptions = [
    {
        key: TransactionsSortType.INC,
        value: TransactionsSortType.INC,
        text: TransactionsSortType.INC
    },
    {
        key: TransactionsSortType.DEC,
        value: TransactionsSortType.DEC,
        text: TransactionsSortType.DEC
    }
];
