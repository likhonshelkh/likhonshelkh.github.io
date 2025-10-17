import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@geist-ui/core';

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = resolvedTheme || theme || 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  return (
    <Button
      auto
      size="small"
      onClick={() => setTheme(nextTheme)}
      data-testid="theme-switcher"
    >
      {nextTheme === 'dark' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeSwitcher;
