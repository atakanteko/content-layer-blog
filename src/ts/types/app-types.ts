import { SystemKeysEnum, ThemeTypeEnum } from "../enums/app-enums";

export type ThemeType = ThemeTypeEnum.LIGHT | ThemeTypeEnum.DARK;

export interface ISystemState {
    [SystemKeysEnum.THEME]: ThemeType;
}

export type SystemKeyTypes = SystemKeysEnum.THEME
