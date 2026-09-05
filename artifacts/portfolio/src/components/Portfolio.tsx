import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { projectsData } from "@/data/projects";

const categories = ["All", "CMS & Real-Time Support", "Casino & Platform", "Analytics & SEO", "Web & Design"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [, setLocation] = useLocation();

  const filtered = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

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
            A cross-section of how I combine technical depth with growth thinking, architecture, and design sensibility. Click any project card to view its full case study, system architecture, and screenshots.
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
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.3)]"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              data-testid={`filter-${cat.toLowerCase().replace(/[\s&]+/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest("a") || target.closest("button")) return;
                  setLocation(`/project/${project.slug}`);
                }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 border border-border/40 bg-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.08)] cursor-pointer"
                data-testid={`project-card-${project.slug}`}
              >
                {/* Visual panel */}
                <Link
                  href={`/project/${project.slug}`}
                  className={`lg:col-span-4 min-h-56 lg:h-auto bg-gradient-to-br ${project.color} border-b lg:border-b-0 lg:border-r border-border/30 relative overflow-hidden block cursor-pointer`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-4 rounded-xl border border-white/10 bg-background/20 shadow-2xl backdrop-blur-sm" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <span className={`font-mono text-xs tracking-widest uppercase ${project.accent} bg-background/80 border border-border/30 px-3 py-1.5 rounded-full backdrop-blur-md`}>
                      {project.category}
                    </span>
                  </div>
                </Link>

                {/* Content panel */}
                <div className="lg:col-span-8 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className={`font-mono text-xs ${project.accent} uppercase font-semibold tracking-wider mb-1`}>
                          {project.role}
                        </p>
                        <Link
                          href={`/project/${project.slug}`}
                          className="text-xl sm:text-2xl font-heading font-bold hover:text-primary transition-colors cursor-pointer block"
                        >
                          {project.title}
                        </Link>
                      </div>

                      <Link
                        href={`/project/${project.slug}`}
                        className="shrink-0 p-2.5 rounded-xl border border-border/40 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all bg-background/50 hover:bg-primary/10 cursor-pointer"
                        data-testid={`project-link-${project.slug}`}
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {project.impact && (
                      <div className="mb-6 p-3.5 rounded-xl bg-primary/5 border border-primary/15 text-xs text-muted-foreground">
                        <span className="font-extrabold text-primary uppercase font-mono mr-1.5">Impact:</span>
                        {project.impact}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/30">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-secondary/60 text-secondary-foreground text-xs rounded-lg font-mono border border-border/30"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-muted-foreground text-xs font-mono">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all font-mono uppercase tracking-wider cursor-pointer"
                    >
                      View Full Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Big centered View All Projects CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-border/30 pt-12"
        >
          <p className="text-muted-foreground text-sm mb-4 font-sans max-w-md mx-auto">
            Explore complete technical architectural documents, server integrations, attribution setups, and high-resolution interface previews.
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/95 transition-all shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] text-sm cursor-pointer"
          >
            Explore All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
