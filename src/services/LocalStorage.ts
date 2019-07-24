export default class {
    static setValue(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    static getValue(key: any) {
        const valueFromStorage = localStorage.getItem(key);
        return valueFromStorage === null
            ? null
            : valueFromStorage;
    }

    static removeValue(key: any) {
        localStorage.removeItem(key);
    }
}
