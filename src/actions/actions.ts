import {
    ChangeAuthField,
    GoToLoginPage,
    GoToRegistrationPage, Login,
    Registration,
    UserAuthFailure,
    UserAuthSuccess
} from './auth';
import {
    ChangeSortOptions,
    ChangeTransactionAmount,
    ChangeTransactionName,
    ChangeNameFilterText,
    CloseTransactionModal,
    CreateTransactionFailure,
    FetchProfileData,
    FetchProfileDataFailure,
    FetchProfileDataSuccess,
    Logout,
    OpenTransactionModal,
    UpdateSuggestedUsersList,
    CreateTransaction
} from './profile';

export type Action =
    | GoToLoginPage
    | ChangeAuthField
    | Registration
    | UserAuthSuccess
    | UserAuthFailure
    | Login
    | Logout
    | FetchProfileData
    | FetchProfileDataSuccess
    | FetchProfileDataFailure
    | OpenTransactionModal
    | CloseTransactionModal
    | ChangeTransactionAmount
    | ChangeTransactionName
    | UpdateSuggestedUsersList
    | CreateTransactionFailure
    | ChangeSortOptions
    | ChangeNameFilterText
    | CreateTransaction
    | GoToRegistrationPage;
