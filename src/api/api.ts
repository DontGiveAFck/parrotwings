import { fromPromise } from 'rxjs/internal-compatibility';
import { UserAuth } from '../typings/common';

const URL = 'http://193.124.114.46:3001';

export default class {
    static registration(credentials: UserAuth) {
        const request = fetch(`${URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({ status: 'ok', data: json }));
            }
            return res.text().then(text => { throw Error(text); });
        });

        return fromPromise(request);
    }

    static login(credentials: UserAuth) {
        const request = fetch(`${URL}/sessions/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({ status: 'ok', data: json }));
            }
            return res.text().then(text => { throw Error(text); });
        });

        return fromPromise(request);
    }


    static getTransactions(tokenId: string) {
        const request = fetch(`${URL}/api/protected/transactions`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${tokenId}`,
            },
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({ status: 'ok', data: json }));
            }
            return res.text().then(text => { throw Error(text); });
        });

        return fromPromise(request);
    }

    static getUserInfo(tokenId: string) {
        const request = fetch(`${URL}/api/protected/user-info`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${tokenId}`
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({ status: 'ok', data: json }));
            }
            return res.text().then(text => { throw Error(text); });
        });

        return fromPromise(request);
    }

    static getFilteredUsersList(filter: string, tokenId: string) {
        const request = fetch(`${URL}/api/protected/users/list`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenId}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filter
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({ status: 'ok', data: json }));
            }
            return res.text()
                .then(text => { throw Error(text); });
        });

        return fromPromise(request);
    }

    static createTransaction(name: string, amount: number, tokenId: string) {
        const request = fetch(`${URL}/api/protected/transactions`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenId}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                amount
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({ status: 'ok', data: json }));
            }
            return res.text()
                .then(text => {
                    throw Error(text);
                });
        });

        return fromPromise(request);
    }
}
