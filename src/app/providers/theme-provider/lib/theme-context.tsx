import { createContext } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
  Light = 'app-light-theme',
  Dark = 'app-dark-theme'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
