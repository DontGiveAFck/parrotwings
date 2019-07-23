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
    ChangeTransactionAmount, ChangeTransactionName,
    CloseTransactionModal, CreateTransactionFailure,
    FetchProfileData,
    FetchProfileDataFailure,
    FetchProfileDataSuccess,
    OpenTransactionModal,
    UpdateSuggestedUsersList
} from './profile';

export type Action =
    | GoToLoginPage
    | ChangeAuthField
    | Registration
    | UserAuthSuccess
    | UserAuthFailure
    | Login
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
    | GoToRegistrationPage;
