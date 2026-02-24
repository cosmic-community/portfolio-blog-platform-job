import Link from 'next/link';
import type { BlogPost } from '@/types';
import CategoryBadge from '@/components/CategoryBadge';

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
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
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-navy-800/50 bg-navy-900/50 card-hover">
        {featuredImage && (
          <div className="aspect-video overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={225}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            {category && <CategoryBadge category={category} />}
            {formattedDate && (
              <time className="text-xs text-navy-500">{formattedDate}</time>
            )}
          </div>
          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-navy-400 leading-relaxed line-clamp-3">
            {post.metadata?.excerpt || ''}
          </p>
          {author && (
            <div className="mt-4 flex items-center gap-3">
              {author.metadata?.avatar && (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.metadata?.name || author.title}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-navy-700"
                />
              )}
              <span className="text-sm font-medium text-navy-300">
                {author.metadata?.name || author.title}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}