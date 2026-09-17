import { createFileRoute, notFound } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { productsQuery } from '../../api';
import { widgetsQuery } from '../../remotes';
import { Panel } from '../../components/Panel';
import { useTheme } from '../../theme';

export const Route = createFileRoute('/widgets/$widgetId')({
  loader: async ({ context: { queryClient }, params }) => {
    const [widgets] = await Promise.all([
      queryClient.ensureQueryData(widgetsQuery),
      queryClient.ensureQueryData(productsQuery),
    ]);
    if (!widgets.some((w) => w.id === params.widgetId)) throw notFound();
  },
  component: WidgetPage,
});

function WidgetPage() {
  const { widgetId } = Route.useParams();
  const { data: widgets } = useSuspenseQuery(widgetsQuery);
  const { data } = useSuspenseQuery(productsQuery);
  const { theme } = useTheme();
  const widget = widgets.find((w) => w.id === widgetId)!;
  const Widget = widget.component;

  return (
    <Panel title={widget.title} description={widget.description}>
      <Widget data={data} theme={theme} />
    </Panel>
  );
}
