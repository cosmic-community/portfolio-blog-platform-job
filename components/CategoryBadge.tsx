import type { Category } from '@/types';

interface CategoryBadgeProps {
  category: Category;
}

const categoryColors: Record<string, string> = {
  'web-development': 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  'design': 'border-purple-500/30 bg-purple-500/10 text-purple-400',
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  if (!category) {
    return null;
  }

  const slug = category.slug || '';
  const colorClass = categoryColors[slug] || 'border-navy-600/50 bg-navy-700/30 text-navy-300';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colorClass}`}
    >
      {category.metadata?.name || category.title}
    </span>
  );
}