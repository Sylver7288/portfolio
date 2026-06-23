import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const categories = ["All", "Casino & Platform", "Analytics & SEO", "Web & Design"];

const projects = [
  {
    title: "BetMax Pro Operations",
    category: "Casino & Platform",
    description:
      "Led end-to-end management of a high-traffic online casino platform — overseeing game provider integrations, real-time technical support, player retention analytics, and regulatory compliance. Maintained 99.9% uptime across peak traffic events.",
    tech: ["Platform Management", "Technical Support", "Data Analysis", "Compliance"],
    color: "from-blue-600/30 via-purple-600/20 to-blue-900/30",
    accent: "text-blue-400",
    link: "#",
  },
  {
    title: "GrowthStream Analytics",
    category: "Analytics & SEO",
    description:
      "Architected full mobile attribution pipelines for a fintech startup using Appsflyer and Adjust. Paired with a deep technical SEO overhaul — resolving crawl issues, improving Core Web Vitals, and restructuring content — resulting in 150%+ organic traffic growth.",
    tech: ["Appsflyer", "Adjust", "Technical SEO", "Google Analytics 4"],
    color: "from-green-600/30 via-emerald-600/20 to-teal-900/30",
    accent: "text-green-400",
    link: "#",
  },
  {
    title: "Nova Creative Hub",
    category: "Web & Design",
    description:
      "Designed and developed a fully custom WordPress theme for a boutique creative agency. Built from scratch with Advanced Custom Fields, custom post types, GSAP animations, and a suite of bespoke graphic assets aligned with the brand identity.",
    tech: ["WordPress", "PHP", "ACF", "Adobe Creative Suite"],
    color: "from-orange-600/30 via-rose-600/20 to-red-900/30",
    accent: "text-orange-400",
    link: "#",
  },
  {
    title: "TechSupport360 Portal",
    category: "Web & Design",
    description:
      "Developed a multi-tier customer support portal integrating ticketing, live chat, and knowledge-base systems. Reduced average resolution time by 40% and improved CSAT scores through intelligent routing and self-service tooling.",
    tech: ["React", "Node.js", "REST APIs", "Technical Support"],
    color: "from-cyan-600/30 via-sky-600/20 to-blue-900/30",
    accent: "text-cyan-400",
    link: "#",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Selected Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A cross-section of how I combine technical depth with growth thinking and design sensibility.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.3)]"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 border border-border/40 bg-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.07)]"
                data-testid={`project-card-${index}`}
              >
                {/* Visual panel */}
                <div className={`lg:col-span-4 h-52 lg:h-auto bg-gradient-to-br ${project.color} flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-border/30 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="text-center z-10">
                    <span className={`font-mono text-xs tracking-widest uppercase ${project.accent} block mb-2`}>
                      {project.category}
                    </span>
                    <div className={`w-10 h-0.5 ${project.accent.replace("text-", "bg-")} mx-auto opacity-60`} />
                  </div>
                </div>

                {/* Content panel */}
                <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                      <a
                        href={project.link}
                        className="shrink-0 p-2 rounded-lg border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all opacity-0 group-hover:opacity-100"
                        data-testid={`project-link-${index}`}
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/70 text-secondary-foreground text-xs rounded-full font-mono border border-border/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
