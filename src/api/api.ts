import {UserRegistration} from '../typings/common';

const URL = 'http://193.124.114.46:3001';

export default class {
    static async registration(credentials: UserRegistration) {
        const response = await fetch(`${URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });

        const responseJson = await response.json();

        return responseJson;
    }
}
