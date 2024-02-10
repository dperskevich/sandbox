import { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { Theme } from "./types";

export interface UseThemeResult {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

    return {
        theme,
        setTheme,
        toggleTheme
    }
}