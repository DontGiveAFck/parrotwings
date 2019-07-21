import { Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { UserRegistration } from '../typings/common';
import LocalStorage from "../services/LocalStorage";

const URL = 'http://193.124.114.46:3001';

export default class {
    static registration(credentials: UserRegistration) {
        const request = fetch(`${URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({status: 'ok', data: json}));
            } else {
                return res.text().then(text => {throw Error(text)});
            }
        })

        return fromPromise(request);
    }

    static login(credentials: UserRegistration) {
        const request = fetch(`${URL}/sessions/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({status: 'ok', data: json}));
            } else {
                return res.text().then(text => {throw Error(text)});
            }
        });

        return fromPromise(request);
    }


    static getTransactions() {
        // TODO - вынести отсюда
        const tokenId = LocalStorage.getValue('id_token');
        const request = fetch(`${URL}/api/protected/transactions`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${tokenId}`,
            },
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({status: 'ok', data: json}));
            } else {
                return res.text().then(text => {throw Error(text)});
            }
        })

        return fromPromise(request);
    }

    static getUserInfo() {
        // TODO - вынести отсюда
        const tokenId = LocalStorage.getValue('id_token');
        const request = fetch(`${URL}/api/protected/user-info`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${tokenId}`
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
                    .then(json => ({status: 'ok', data: json}));
            } else {
                return res.text().then(text => {throw Error(text)});
            }
        })

        return fromPromise(request);
    }

    static getFilteredUsersList(filter: string) {
        const tokenId = LocalStorage.getValue('id_token');
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
                    .then(json => ({status: 'ok', data: json}));
            } else {
                return res.text().then(text => {throw Error(text)});
            }
        })

        return fromPromise(request);
    }
}
