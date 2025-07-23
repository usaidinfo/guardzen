
'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme();

    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>
    );
  } catch (error) {
    // Fallback UI when ThemeProvider is not available
    return (
      <button
        className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 text-gray-700" />
      </button>
    );
  }
}
