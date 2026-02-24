import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[400px] rounded-full bg-navy-700/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent">Available for work</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Building digital
            <br />
            <span className="gradient-text">experiences</span> that
            <br />
            matter.
          </h1>
          <p className="mt-6 text-lg text-navy-300 leading-relaxed md:text-xl">
            Developer & designer crafting modern web applications with clean code, 
            thoughtful design, and a focus on user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              Read the Blog
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-700 px-6 py-3 text-sm font-semibold text-navy-200 transition-all hover:border-navy-500 hover:bg-navy-800/50"
            >
              View Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}