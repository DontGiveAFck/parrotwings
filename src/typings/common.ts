export interface State {
    auth: AuthPageState;
}

export interface AuthPageState {
    page: AuthPage,
    credentials: UserRegistration
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
