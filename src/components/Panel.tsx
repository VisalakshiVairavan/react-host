import { Suspense, type ReactNode } from 'react';
import { Loading } from './Status';

interface PanelProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Panel({ title, description, children }: PanelProps) {
  return (
    <section className="min-w-0 rounded-[2rem] border border-white/50 bg-foam/75 p-4 shadow-2xl shadow-espresso/20 backdrop-blur-xl transition-colors duration-500 sm:p-8 dark:border-crema/10 dark:bg-espresso/70 dark:shadow-black/40">
      <h1 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
      {description && <p className="mt-2 max-w-prose text-roast dark:text-crema/70">{description}</p>}
      <div className="mt-6 min-w-0">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </section>
  );
}
