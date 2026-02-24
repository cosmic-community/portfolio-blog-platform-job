import type { Metadata } from 'next';
import { getBlogPosts, getCategories, getAuthors } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'Blog | Portfolio & Blog',
  description: 'Read the latest articles on web development, design, and more.',
};

export default async function BlogPage() {
  const [posts, categories, authors] = await Promise.all([
    getBlogPosts(),
    getCategories(),
    getAuthors(),
  ]);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            The <span className="gradient-text">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-navy-400 leading-relaxed">
            Thoughts, tutorials, and insights on web development and design.
          </p>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-500">
              Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-lg border border-navy-800/50 bg-navy-900/50 px-4 py-2"
                >
                  <span className="text-sm font-medium text-navy-200">
                    {cat.metadata?.name || cat.title}
                  </span>
                  {cat.metadata?.description && (
                    <p className="mt-0.5 text-xs text-navy-500">{cat.metadata.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-navy-800/50 bg-navy-900/50 py-16 text-center">
            <p className="text-navy-400">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {/* Authors */}
        {authors.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Meet the <span className="gradient-text">Authors</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {authors.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}