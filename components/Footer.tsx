import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800/50 bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-bold text-navy-950 text-sm">
                P
              </div>
              <span className="text-lg font-semibold text-white">Portfolio</span>
            </Link>
            <p className="mt-3 text-sm text-navy-400 leading-relaxed">
              A personal portfolio and blog platform showcasing skills, projects, and articles.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-navy-400 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-navy-400 transition-colors hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300">
              Powered By
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.cosmicjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-400 transition-colors hover:text-accent"
                >
                  Cosmic
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-400 transition-colors hover:text-accent"
                >
                  Next.js
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-navy-800/50 pt-6">
          <p className="text-center text-xs text-navy-500">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}