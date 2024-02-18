import { useContext } from "react";
import { ThemeContext, Theme } from "./theme-context";

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