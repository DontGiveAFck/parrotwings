export interface State {
    auth: AuthPageState;
}

export interface AuthPageState {
    page: AuthPage,
    credentials: UserRegistration | UserLogin
}

export enum AuthPage {
    LOGIN = 'LOGIN',
    REGISTRATION = 'REGISTRATION'
}

export interface UserRegistration {
    email: string,
    password: string,
    username: string
}

export interface UserLogin {
    email: string,
    password: string,
}
