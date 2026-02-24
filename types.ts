// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// Author type
export interface Author extends CosmicObject {
  metadata: {
    name: string;
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    website?: string;
  };
}

// Category type
export interface Category extends CosmicObject {
  metadata: {
    name: string;
    description?: string;
  };
}

// Blog Post type
export interface BlogPost extends CosmicObject {
  metadata: {
    excerpt: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    publish_date?: string;
    author?: Author;
    category?: Category;
  };
}

// Skill select-dropdown value type
export interface SelectDropdownValue {
  key: string;
  value: string;
}

// Skill type
export interface Skill extends CosmicObject {
  metadata: {
    name: string;
    category: SelectDropdownValue;
    proficiency: SelectDropdownValue;
  };
}

// Project type
export interface Project extends CosmicObject {
  metadata: {
    description: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_url?: string;
    skills_used?: Skill[];
  };
}

// Work Experience type
export interface WorkExperience extends CosmicObject {
  metadata: {
    company: string;
    role: string;
    start_date: string;
    end_date?: string;
    description?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Skill category keys
export type SkillCategoryKey = 'frontend' | 'backend' | 'language' | 'design' | 'devops';

// Proficiency keys
export type ProficiencyKey = 'beginner' | 'intermediate' | 'advanced' | 'expert';