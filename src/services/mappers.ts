import { UserInfo } from '../typings/common';


export function mapUserInfo(
    userInfoToken: any
): UserInfo {
    return {
        balance: userInfoToken.balance,
        name: userInfoToken.name,
    };
}

// export function mapUserTransactions() {
//
// }
