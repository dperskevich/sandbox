import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "../lib/theme-context"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const selectTheme = (theme: Theme) => {
        setTheme(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }

    const toggleTheme = () => selectTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)

    const providerValue = useMemo(() => ({
        theme,
        setTheme: selectTheme,
        toggleTheme
    }), [theme, selectTheme, toggleTheme]);

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;