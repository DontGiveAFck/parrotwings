import {
    SuggestedUsersListApiFormat,
    SuggestedUsersListClientFormat,
    UserInfo
} from '../typings/common';

export function mapUserInfo(
    userInfoToken: any
): UserInfo {
    return {
        balance: userInfoToken.balance,
        name: userInfoToken.name,
    };
}

export function mapSuggestedUsersList(
    usersList: SuggestedUsersListApiFormat[]
): SuggestedUsersListClientFormat[] {
    return usersList.map(user => ({
        key: user.id,
        value: user.name,
        text: user.name
    }));
}
