import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    const initialTheme = localStorage.getItem('theme');

    return initialTheme || 'light';
  });

  useEffect(() => {
    const appClass = document.querySelector('.app');

    if (appClass) {
      appClass.classList.remove('light', 'dark');
      appClass.classList.add(theme);
    }

    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContext | undefined => useContext(ThemeContext);
