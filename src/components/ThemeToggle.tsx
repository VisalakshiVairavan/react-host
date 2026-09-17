import { useTheme } from '../theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-espresso/15 bg-foam/70 text-roast shadow-sm backdrop-blur transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apron dark:border-crema/20 dark:bg-espresso/60 dark:text-crema"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`absolute h-5 w-5 transition-all duration-500 motion-reduce:transition-none ${dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute h-5 w-5 transition-all duration-500 motion-reduce:transition-none ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
