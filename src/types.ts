export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}