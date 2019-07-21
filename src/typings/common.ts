export interface State {
    auth: AuthPageState;
    profile: Profile;
}

export interface AuthPageState {
    page: AuthPage,
    credentials: UserRegistration,
    errorText?: string
}

export enum AuthPage {
    LOGIN = 'LOGIN',
    REGISTRATION = 'REGISTRATION'
}

// TODO - общее для регистрации и авторизации - изменить название
export interface UserRegistration {
    email: string,
    password: string,
    username?: string
}

export enum AuthField {
    EMAIL = 'EMAIL',
    PASSWORD = 'PASSWORD',
    USERNAME = 'USERNAME'
}

export interface AuthResponse {
    status: string;
}

export interface UserInfo {
    balance: number;
    name: string;
}

export interface TransactionModalData {
    name: string;
    amount: number;
    suggestedUsersList: [];
}

export interface Profile {
    userInfo: UserInfo;
    // TODO - transactionInfo добавить интерфейс
    transactionsInfo: any;
    isLoading: boolean;
    transactionModalOpened: boolean;
    transactionModalData: TransactionModalData;
}
