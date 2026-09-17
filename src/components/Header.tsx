import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { widgetsQuery } from '../remotes';
import { ThemeToggle } from './ThemeToggle';

const linkClass =
  'rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-espresso/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-apron dark:hover:bg-crema/10';
const activeClass = 'bg-apron text-foam hover:bg-apron dark:bg-crema dark:text-espresso dark:hover:bg-crema';

export function Header() {
  const { data: widgets = [] } = useQuery(widgetsQuery);

  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="font-display text-3xl tracking-tight">
        MFE cafe
      </Link>
      <div className="flex items-center gap-3">
        <nav className="flex flex-wrap gap-1 rounded-full border border-espresso/10 bg-foam/60 p-1 backdrop-blur dark:border-crema/10 dark:bg-espresso/50">
          <Link to="/table" className={linkClass} activeProps={{ className: activeClass }}>
            Table
          </Link>
          <Link to="/chart" className={linkClass} activeProps={{ className: activeClass }}>
            Chart
          </Link>
          {widgets.map((w) => (
            <Link
              key={w.id}
              to="/widgets/$widgetId"
              params={{ widgetId: w.id }}
              className={linkClass}
              activeProps={{ className: activeClass }}
            >
              {w.title}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
