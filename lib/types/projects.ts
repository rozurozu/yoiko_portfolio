export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  featured: boolean;
  technologies: string[];
  screenshots?: string[];
  date: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

export interface GithubStats {
  repos: number;
  followers: number;
  following: number;
  contributions: number;
  topRepositories: GithubRepo[];
}