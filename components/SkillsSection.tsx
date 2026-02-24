import type { Skill, SkillCategoryKey } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryLabels: Record<SkillCategoryKey, string> = {
  frontend: '🎨 Frontend',
  backend: '⚙️ Backend',
  language: '💻 Programming Language',
  design: '🖌️ Design',
  devops: '🚀 DevOps',
};

const categoryOrder: SkillCategoryKey[] = ['frontend', 'backend', 'language', 'design', 'devops'];

const proficiencyColors: Record<string, string> = {
  beginner: 'bg-navy-600 text-navy-200',
  intermediate: 'bg-blue-900/60 text-blue-300',
  advanced: 'bg-accent/20 text-accent',
  expert: 'bg-green-900/60 text-green-300',
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {};
  for (const skill of skills) {
    const categoryKey = skill.metadata?.category?.key || 'other';
    if (!skillsByCategory[categoryKey]) {
      skillsByCategory[categoryKey] = [];
    }
    skillsByCategory[categoryKey]?.push(skill);
  }

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-3 text-navy-400">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryOrder
            .filter((categoryKey) => {
              const catSkills = skillsByCategory[categoryKey];
              return catSkills && catSkills.length > 0;
            })
            .map((categoryKey) => {
              const catSkills = skillsByCategory[categoryKey];

              if (!catSkills || catSkills.length === 0) {
                return null;
              }

              return (
                <div
                  key={categoryKey}
                  className="rounded-xl border border-navy-800/50 bg-navy-900/50 p-6 card-hover"
                >
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {categoryLabels[categoryKey] || categoryKey}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => {
                      const profKey = skill.metadata?.proficiency?.key || 'intermediate';
                      const colorClass = proficiencyColors[profKey] || proficiencyColors['intermediate'];

                      return (
                        <span
                          key={skill.id}
                          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${colorClass}`}
                          title={`${skill.metadata?.proficiency?.value || 'Intermediate'} proficiency`}
                        >
                          {skill.metadata?.name || skill.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}