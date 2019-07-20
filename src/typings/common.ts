export interface State {
    auth: AuthState;
}

export interface AuthState {
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
