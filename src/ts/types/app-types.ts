import { SystemKeysEnum, ThemeTypeEnum } from "../enums/app-enums";

export type ThemeType = ThemeTypeEnum.DARK | ThemeTypeEnum.LIGHT;

export interface ISystemState {
    [SystemKeysEnum.THEME]: ThemeType;
}

export type SystemKeyTypes = SystemKeysEnum.THEME
