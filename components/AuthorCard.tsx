import type { Author } from '@/types';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const avatar = author.metadata?.avatar;
  const bio = author.metadata?.bio;
  const website = author.metadata?.website;

  return (
    <div className="flex items-start gap-4 rounded-xl border border-navy-800/50 bg-navy-900/50 p-6">
      {avatar && (
        <img
          src={`${avatar.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
          alt={author.metadata?.name || author.title}
          width={64}
          height={64}
          className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-accent/30"
        />
      )}
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-white">
          {author.metadata?.name || author.title}
        </h3>
        {bio && (
          <p className="mt-1 text-sm text-navy-400 leading-relaxed line-clamp-2">
            {bio}
          </p>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-light transition-colors"
          >
            Visit website
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}