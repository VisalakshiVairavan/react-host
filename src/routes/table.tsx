import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { productsQuery } from '../api';
import { ProductTable } from '../remotes';
import { Panel } from '../components/Panel';
import { useTheme } from '../theme';

export const Route = createFileRoute('/table')({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(productsQuery),
  component: TablePage,
});

function TablePage() {
  const { data } = useSuspenseQuery(productsQuery);
  const { theme } = useTheme();

  return (
    <Panel title="The full menu" description="Sort and filter every product by price, rating and stock.">
      <ProductTable data={data} theme={theme} />
    </Panel>
  );
}
