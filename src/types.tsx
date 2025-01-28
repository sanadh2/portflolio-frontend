type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  projectUrl?: string;
  repoUrl?: string;
  createdAt: Date;
};

type Skill = {
  id: string;
  name: string;
  category?: string;
  proficiency?: string;
};

type WorkExperience = {
  id: string;
  companyName: string;
  role: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  logoUrl?: string;
};

type Education = {
  id: string;
  institutionName: string;
  degree: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  logoUrl?: string;
};

type Contact = {
  id: string;
  name?: string;
  email?: string;
  message?: string;
  submittedAt: Date;
};

export type { Project, Contact, Education, Skill, WorkExperience };
