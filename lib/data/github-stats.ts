import { GithubStats, GithubRepo } from "@/lib/types/projects";

// Mock GitHub statistics data
export const githubStats: GithubStats = {
  repos: 28,
  followers: 157,
  following: 42,
  contributions: 1248,
  topRepositories: [
    {
      name: "ecommerce-platform",
      description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
      url: "https://github.com/username/ecommerce-platform",
      stars: 42,
      forks: 12,
      language: "TypeScript",
    },
    {
      name: "ai-content-generator",
      description: "An AI-powered content generation tool for marketers and content creators.",
      url: "https://github.com/username/ai-content-generator",
      stars: 35,
      forks: 8,
      language: "JavaScript",
    },
    {
      name: "task-management-app",
      description: "A collaborative task management application for teams and individuals.",
      url: "https://github.com/username/task-management-app",
      stars: 28,
      forks: 6,
      language: "TypeScript",
    },
    {
      name: "fitness-tracker",
      description: "A mobile app for tracking workouts, nutrition, and fitness progress.",
      url: "https://github.com/username/fitness-tracker",
      stars: 22,
      forks: 5,
      language: "JavaScript",
    },
  ],
};

// Weekly contribution data for the chart
export const contributionData = [
  { week: "Week 1", contributions: 24 },
  { week: "Week 2", contributions: 18 },
  { week: "Week 3", contributions: 32 },
  { week: "Week 4", contributions: 27 },
  { week: "Week 5", contributions: 45 },
  { week: "Week 6", contributions: 36 },
  { week: "Week 7", contributions: 52 },
  { week: "Week 8", contributions: 43 },
  { week: "Week 9", contributions: 38 },
  { week: "Week 10", contributions: 57 },
  { week: "Week 11", contributions: 48 },
  { week: "Week 12", contributions: 61 },
];