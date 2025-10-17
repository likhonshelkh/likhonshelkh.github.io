import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-1 rounded-md bg-accents-2 text-accents-6"
      data-testid="theme-switcher"
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeSwitcher;