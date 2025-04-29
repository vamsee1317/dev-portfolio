"use client";

import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Mock GitHub data
const contributionData = [
  { month: "Jan", contributions: 52 },
  { month: "Feb", contributions: 78 },
  { month: "Mar", contributions: 103 },
  { month: "Apr", contributions: 87 },
  { month: "May", contributions: 114 },
  { month: "Jun", contributions: 92 },
  { month: "Jul", contributions: 69 },
  { month: "Aug", contributions: 98 },
  { month: "Sep", contributions: 127 },
  { month: "Oct", contributions: 143 },
  { month: "Nov", contributions: 116 },
  { month: "Dec", contributions: 85 },
];

const languageData = [
  { name: "JavaScript", value: 40, color: "#f7df1e" },
  { name: "TypeScript", value: 30, color: "#3178c6" },
  { name: "HTML/CSS", value: 15, color: "#e34c26" },
  { name: "Python", value: 10, color: "#3572A5" },
  { name: "Other", value: 5, color: "#8e8e8e" },
];

const statsCards = [
  { title: "Repositories", value: "38", icon: "📁" },
  { title: "Stars", value: "217", icon: "⭐" },
  { title: "Followers", value: "163", icon: "👥" },
  { title: "Contributions", value: "1,164", icon: "🧩" },
];

export default function GitHubStats() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  
  return (
    <section id="github" className="w-full py-20 px-4 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>GitHub Stats</SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {statsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <span className="text-3xl mb-2">{card.icon}</span>
                  <CardTitle className="text-2xl font-bold mb-1">{card.value}</CardTitle>
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Yearly Contributions</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={contributionData}>
                    <XAxis 
                      dataKey="month" 
                      tick={{ fill: isDark ? "#94a3b8" : "#475569" }}
                    />
                    <YAxis 
                      tick={{ fill: isDark ? "#94a3b8" : "#475569" }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? "#1e293b" : "#ffffff",
                        borderColor: isDark ? "#334155" : "#e2e8f0",
                        color: isDark ? "#f8fafc" : "#0f172a"
                      }}
                    />
                    <Bar 
                      dataKey="contributions" 
                      fill="hsl(var(--chart-1))" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? "#1e293b" : "#ffffff",
                        borderColor: isDark ? "#334155" : "#e2e8f0",
                        color: isDark ? "#f8fafc" : "#0f172a"
                      }}
                      formatter={(value) => [`${value}%`, "Percentage"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}