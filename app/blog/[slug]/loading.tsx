// app/blog/[slug]/loading.tsx
export default function BlogPostLoading() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 h-5 w-24 animate-pulse rounded bg-navy-800/30" />
        <div className="space-y-4">
          <div className="h-4 w-24 animate-pulse rounded bg-navy-800/30" />
          <div className="h-12 w-3/4 animate-pulse rounded bg-navy-800/50" />
          <div className="h-6 w-full animate-pulse rounded bg-navy-800/30" />
        </div>
        <div className="mt-8 aspect-video w-full animate-pulse rounded-xl bg-navy-800/30" />
        <div className="mt-8 space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-5 w-full animate-pulse rounded bg-navy-800/20" />
          ))}
        </div>
      </div>
    </div>
  );
}