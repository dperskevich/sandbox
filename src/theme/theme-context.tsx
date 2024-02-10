import { createContext } from "react";
import { Theme } from "./types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

