import { LocalStorageEnum } from "@/ts/enums/app-enums";
import { ISystemState } from "@/ts/types/app-types";

const setLocalStorageItem = <T>(key: LocalStorageEnum, value: T): void => {
    return localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageItem = (key: LocalStorageEnum): ISystemState => {
    const data = localStorage.getItem(key);
    return data !== null ? JSON.parse(data) : null;
};

const deleteLocalStorageItem = (key: LocalStorageEnum) => {
    return localStorage.removeItem(key);
};

const clearItems = (keys: LocalStorageEnum[]): void => {
    keys.forEach((key) => deleteLocalStorageItem(key));
};

export const LocalStorageHelper = {
    setLocalStorageItem,
    getLocalStorageItem,
    deleteLocalStorageItem,
    clearItems,
};

