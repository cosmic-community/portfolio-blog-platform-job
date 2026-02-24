import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-navy-800/50 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-bold text-navy-950 text-sm transition-transform group-hover:scale-110">
            P
          </div>
          <span className="text-lg font-semibold text-white">Portfolio</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-navy-300 transition-colors hover:text-accent"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-navy-300 transition-colors hover:text-accent"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}