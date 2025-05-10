export interface SubProject {
  name: string;
  description: string;
  link: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  achievement: string;
  challenges: string[];
  solutions: string[];
  images: string[];
  githubUrl: string;
  liveUrl?: string;
  company: string;
  role: string;
  duration: string;
  subProjects: SubProject[];
}


export interface ProjectTypes {
  web: ProjectDetail[];
  mobile: ProjectDetail[];
  desktop: ProjectDetail[];
}

export default ProjectDetail;