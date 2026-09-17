import { Link, type ErrorComponentProps } from '@tanstack/react-router';

export function Loading() {
  return (
    <div role="status" className="flex items-center gap-3 py-16 text-roast dark:text-crema/70">
      <span className="h-3 w-3 animate-ping rounded-full bg-apron motion-reduce:animate-none dark:bg-crema" />
      Loading
    </div>
  );
}

export function ErrorState({ error }: ErrorComponentProps) {
  return (
    <div role="alert" className="rounded-3xl bg-foam/80 p-8 backdrop-blur-xl dark:bg-espresso/70">
      <h1 className="font-display text-3xl">This page didn't load</h1>
      <p className="mt-2 text-roast dark:text-crema/70">{error.message}</p>
      <p className="mt-1 text-sm text-roast dark:text-crema/70">
        Check that the remote app is running on port 3001.
      </p>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="rounded-3xl bg-foam/80 p-8 backdrop-blur-xl dark:bg-espresso/70">
      <h1 className="font-display text-3xl">Nothing on this page</h1>
      <Link to="/table" className="mt-4 inline-block font-medium text-apron underline dark:text-crema">
        Go to the table
      </Link>
    </div>
  );
}
