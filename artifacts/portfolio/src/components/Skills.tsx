import React from "react";
import { motion } from "framer-motion";
import {
  Code2, HeadphonesIcon, Search, BarChart2, TrendingUp,
  Globe, PenTool, Shield,
} from "lucide-react";

const skills = [
  {
    name: "Web Development",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    desc: "Full-stack development with modern frameworks and clean architecture.",
  },
  {
    name: "Technical Support",
    icon: HeadphonesIcon,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    desc: "Diagnosing and resolving complex technical issues with precision.",
  },
  {
    name: "SEO Optimization",
    icon: Search,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    desc: "Technical SEO, keyword strategy, and organic growth at scale.",
  },
  {
    name: "Appsflyer",
    icon: BarChart2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    desc: "Mobile attribution, deep links, fraud prevention, and reporting.",
  },
  {
    name: "Adjust",
    icon: TrendingUp,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    desc: "SDK integration, campaign measurement, and cohort analysis.",
  },
  {
    name: "WordPress",
    icon: Globe,
    color: "text-blue-300",
    bg: "bg-blue-400/10 border-blue-400/20",
    desc: "Custom themes, plugins, WooCommerce, and performance tuning.",
  },
  {
    name: "Graphic Design",
    icon: PenTool,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    desc: "Brand identity, UI assets, and marketing visuals that convert.",
  },
  {
    name: "Casino Platform Mgt",
    icon: Shield,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    desc: "Back-office operations, compliance, game integrations, and analytics.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 26 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive toolkit spanning development, analytics, design, and platform management — built for cross-disciplinary impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative bg-card border border-border/40 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-[0_0_24px_hsl(var(--primary)/0.08)] flex flex-col gap-3"
                data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`inline-flex p-2.5 rounded-lg border ${skill.bg} w-fit`}>
                  <Icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm mb-1">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
