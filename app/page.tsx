import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import BlogPreview from '@/components/BlogPreview';
import { getBlogPosts, getSkills } from '@/lib/cosmic';

export default async function HomePage() {
  const [posts, skills] = await Promise.all([
    getBlogPosts(),
    getSkills(),
  ]);

  return (
    <>
      <HeroSection />
      <SkillsSection skills={skills} />
      <BlogPreview posts={posts} />
    </>
  );
}