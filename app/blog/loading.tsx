export default function BlogLoading() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <div className="h-12 w-48 animate-pulse rounded-lg bg-navy-800/50" />
          <div className="mt-4 h-6 w-96 animate-pulse rounded-lg bg-navy-800/30" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-navy-800/50 bg-navy-900/50">
              <div className="aspect-video animate-pulse bg-navy-800/30" />
              <div className="p-6 space-y-3">
                <div className="h-4 w-20 animate-pulse rounded bg-navy-800/30" />
                <div className="h-6 w-3/4 animate-pulse rounded bg-navy-800/50" />
                <div className="h-4 w-full animate-pulse rounded bg-navy-800/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}