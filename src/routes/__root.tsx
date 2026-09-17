import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { Background } from '../components/Background';
import { Header } from '../components/Header';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Background />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-6 sm:px-8">
        <Header />
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </>
  );
}
