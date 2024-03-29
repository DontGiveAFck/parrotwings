export interface State {
    auth: AuthPageState;
    profile: Profile;
}

export interface AuthPageState {
    page: AuthPage;
    credentials: UserAuth;
    errorText?: string;
    isLoading: boolean;
}

export enum AuthPage {
    LOGIN = 'LOGIN',
    REGISTRATION = 'REGISTRATION'
}

export interface UserAuth {
    email: string,
    password: string,
    rPassword?: string,
    username?: string
}

export enum AuthField {
    EMAIL = 'EMAIL',
    PASSWORD = 'PASSWORD',
    PASSWORD_REPEAT = 'PASSWORD_REPEAT',
    USERNAME = 'USERNAME'
}

export interface UserInfo {
    balance: number;
    name: string;
}

export interface TransactionModalData {
    name: string;
    amount: number;
    suggestedUsersList: SuggestedUsersListClientFormat[];
    errorText?: string;
    isLoading: boolean
}

export interface Profile {
    userInfo: UserInfo;
    transactionsInfo: TransactionInfo[];
    isLoading: boolean;
    transactionModalOpened: boolean;
    transactionModalData: TransactionModalData;
    sortColumn: TransactionsSortColumn;
    sortDirection: SortDirection;
    filterName: string;
}

export interface TransactionInfo {
    amount: number
    balance: number
    date: string
    id: number
    username: string;
}

export enum TransactionsSortColumn {
    Date = 'date',
    Username = 'username',
    Amount = 'amount',
}

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface SuggestedUsersListApiFormat {
    id: number;
    name: string;
}

export interface SuggestedUsersListClientFormat {
    key: number;
    value: string;
    text: string;
}
