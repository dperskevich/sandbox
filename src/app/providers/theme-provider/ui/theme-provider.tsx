import React, {
  FC, useMemo, useState, useCallback, useEffect,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/theme-context';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const selectTheme = useCallback((value: Theme) => {
    setTheme(value);
    document.body.className = value;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => selectTheme(theme === Theme.Light ? Theme.Dark : Theme.Light),
    [selectTheme, theme],
  );

  const providerValue = useMemo(() => ({
    theme,
    setTheme: selectTheme,
    toggleTheme,
  }), [theme, selectTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
