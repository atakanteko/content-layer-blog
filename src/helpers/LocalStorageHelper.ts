import { LocalStorageEnum, ThemeTypeEnum } from "@/ts/enums/app-enums";
import { ISystemState } from "@/ts/types/app-types";
import { defaultSystemConfig } from "./SystemHelper";

const setLocalStorageItem = <T>(key: LocalStorageEnum, value: T): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

const getLocalStorageItem = (key: LocalStorageEnum): ISystemState => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key);
        return data !== null ? JSON.parse(data) : null;
    }
    return defaultSystemConfig;
};

const deleteLocalStorageItem = (key: LocalStorageEnum) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

const clearItems = (keys: LocalStorageEnum[]): void => {
    if (typeof window !== 'undefined') {
        keys.forEach((key) => deleteLocalStorageItem(key));
    }
};

export const LocalStorageHelper = {
    setLocalStorageItem,
    getLocalStorageItem,
    deleteLocalStorageItem,
    clearItems,
};