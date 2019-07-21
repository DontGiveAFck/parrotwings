export default class {
    static setValue(key: string, value: any) {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    static getValue(key: any) {
        const valueFromStorage = localStorage.getItem(key);
        return valueFromStorage === null
            ? null
            : JSON.parse(valueFromStorage);
    }
}
