import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { productsQuery } from '../api';
import { PriceChart } from '../remotes';
import { Panel } from '../components/Panel';
import { useTheme } from '../theme';

export const Route = createFileRoute('/chart')({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(productsQuery),
  component: ChartPage,
});

function ChartPage() {
  const { data } = useSuspenseQuery(productsQuery);
  const { theme } = useTheme();

  return (
    <Panel title="Price board" description="Compare what each product costs at a glance.">
      <PriceChart data={data} theme={theme} />
    </Panel>
  );
}
