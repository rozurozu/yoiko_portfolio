"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, ResponsiveContainer, XAxis, YAxis, Bar, Tooltip, 
  TooltipProps, Cell, Legend 
} from "recharts";
import { 
  Star, GitFork, Users, UserPlus, GitCommit, Github 
} from "lucide-react";
import { githubStats, contributionData } from "@/lib/data/github-stats";

export function GithubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="github-stats" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            GitHub Statistics
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            An overview of my open source contributions and projects
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <motion.div variants={itemVariants}>
            <StatCard 
              title="Repositories" 
              value={githubStats.repos} 
              icon={<Github className="h-4 w-4" />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard 
              title="Followers" 
              value={githubStats.followers} 
              icon={<Users className="h-4 w-4" />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard 
              title="Following" 
              value={githubStats.following} 
              icon={<UserPlus className="h-4 w-4" />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard 
              title="Contributions" 
              value={githubStats.contributions} 
              icon={<GitCommit className="h-4 w-4" />}
            />
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contribution Activity</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={contributionData}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 0,
                      bottom: 20,
                    }}
                  >
                    <XAxis 
                      dataKey="week"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip 
                      cursor={{ fill: "var(--muted)" }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="p-2 bg-background border rounded-md shadow-sm">
                              <p className="font-medium">{`${payload[0].payload.week}`}</p>
                              <p className="text-sm text-muted-foreground">
                                {`Contributions: ${payload[0].value}`}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="contributions" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Top Repositories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {githubStats.topRepositories.map((repo) => (
                    <div key={repo.name} className="space-y-2">
                      <Link 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:underline flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        {repo.name}
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {repo.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          <span>{repo.forks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="inline-block h-3 w-3 rounded-full bg-primary" />
                          <span>{repo.language}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: number; 
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-bold">{value.toLocaleString()}</p>
          </div>
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}