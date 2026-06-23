import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Search, BarChart, PenTool, LayoutTemplate, ShieldCheck, Database, Globe } from "lucide-react";

const skills = [
  { name: "Web Development", icon: Code, color: "text-blue-400" },
  { name: "Technical Support", icon: Server, color: "text-green-400" },
  { name: "SEO Optimization", icon: Search, color: "text-orange-400" },
  { name: "Appsflyer", icon: BarChart, color: "text-primary" },
  { name: "Adjust", icon: Database, color: "text-red-400" },
  { name: "WordPress", icon: Globe, color: "text-blue-300" },
  { name: "Graphic Design", icon: PenTool, color: "text-purple-400" },
  { name: "Casino Platform Mgt", icon: ShieldCheck, color: "text-yellow-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit designed for building, measuring, and scaling digital products across different domains.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-card border border-border/50 p-6 rounded hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center gap-4 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
                data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded" />
                <Icon className={`w-10 h-10 ${skill.color} transition-transform group-hover:scale-110`} />
                <span className="font-semibold text-sm tracking-wide">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
