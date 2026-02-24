// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getBlogPost, getBlogPosts } from '@/lib/cosmic';
import CategoryBadge from '@/components/CategoryBadge';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Portfolio & Blog`,
    description: post.metadata?.excerpt || '',
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const publishDate = post.metadata?.publish_date;

  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy-400 transition-colors hover:text-accent"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {category && <CategoryBadge category={category} />}
            {formattedDate && (
              <time className="text-sm text-navy-500">{formattedDate}</time>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          {post.metadata?.excerpt && (
            <p className="mt-4 text-lg text-navy-400 leading-relaxed">
              {post.metadata.excerpt}
            </p>
          )}

          {/* Author */}
          {author && (
            <div className="mt-6 flex items-center gap-4 rounded-lg border border-navy-800/50 bg-navy-900/50 p-4">
              {author.metadata?.avatar && (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30"
                />
              )}
              <div>
                <p className="font-semibold text-white">
                  {author.metadata?.name || author.title}
                </p>
                {author.metadata?.bio && (
                  <p className="text-sm text-navy-400 line-clamp-1">
                    {author.metadata.bio}
                  </p>
                )}
              </div>
            </div>
          )}
        </header>

        {/* Featured image */}
        {featuredImage && (
          <div className="mb-10 overflow-hidden rounded-xl">
            <img
              src={`${featuredImage.imgix_url}?w=1400&h=700&fit=crop&auto=format,compress`}
              alt={post.title}
              width={700}
              height={350}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-navy-300 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-100 prose-code:text-accent prose-code:bg-navy-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-navy-900 prose-pre:border prose-pre:border-navy-800/50 prose-li:text-navy-300 prose-blockquote:border-accent/50 prose-blockquote:text-navy-400">
          <ReactMarkdown>{post.metadata?.content || ''}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}