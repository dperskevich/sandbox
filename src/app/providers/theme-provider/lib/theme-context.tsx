import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});