import { Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { UserRegistration } from '../typings/common';

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
        })

        return fromPromise(request);
    }
}
