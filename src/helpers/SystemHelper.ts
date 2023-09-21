import { LocalStorageEnum, SystemKeysEnum, ThemeTypeEnum } from "@/ts/enums/app-enums";
import { LocalStorageHelper } from "./LocalStorageHelper";
import { ISystemState, SystemKeyTypes } from "@/ts/types/app-types";

export const defaultSystemConfig: ISystemState = {
    [SystemKeysEnum.THEME]: ThemeTypeEnum.DARK,
};

export const updateSystemConfig = (key: SystemKeyTypes, value: string | number) => {
    // Retrieve the existing data from local storage
    const existingData = LocalStorageHelper.getLocalStorageItem(
        LocalStorageEnum.SYSTEM
    );

    let newData;

    const parsedData = existingData ?? {};

    if (parsedData) {
        newData = { ...existingData, [key]: value };
    } else {
        newData = { ...defaultSystemConfig, [key]: value };
    }

    // Store the updated data back into local storage
    LocalStorageHelper.setLocalStorageItem(LocalStorageEnum.SYSTEM, newData);
};

export const SystemHelper = {
    updateSystemConfig,
};