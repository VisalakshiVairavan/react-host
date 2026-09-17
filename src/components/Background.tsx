const image =
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80';

export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-foam/70 transition-colors duration-500 dark:bg-espresso/80" />
    </div>
  );
}
