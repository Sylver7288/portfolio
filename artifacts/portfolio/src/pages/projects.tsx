import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";

const filterCategories = [
  "All",
  "CMS & Real-Time Support",
  "Casino & Platform",
  "Analytics & SEO",
  "Web & Design",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filtered = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />

      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-[45vw] h-[40vw] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <main className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12 pt-32 pb-32 md:pb-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-6 hover:opacity-80 group transition-opacity"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 leading-tight">
            Complete Project Portfolio
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed">
            A comprehensive compilation of products, architectures, and platforms I have engineered, optimized, and managed. Click any project to open its full technical breakdown, metrics, and screenshots.
          </p>
        </motion.div>

        {/* Filter Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.3)]"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Listing Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-border/40 bg-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 hover:shadow-[0_0_50px_hsl(var(--primary)/0.06)] group"
              >
                {/* Visual Panel */}
                <Link
                  href={`/project/${project.slug}`}
                  className={`lg:col-span-4 min-h-64 lg:h-auto bg-gradient-to-br ${project.color} border-b lg:border-b-0 lg:border-r border-border/30 relative overflow-hidden block cursor-pointer`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-5 rounded-2xl border border-white/10 bg-background/20 shadow-2xl backdrop-blur-sm" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <span className={`font-mono text-xs tracking-widest uppercase ${project.accent} bg-background/80 border border-border/30 px-3 py-1.5 rounded-full backdrop-blur-md`}>
                      {project.category}
                    </span>
                  </div>
                </Link>

                {/* Descriptive Grid Content */}
                <div className="lg:col-span-8 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className={`font-mono text-xs ${project.accent} font-bold tracking-wider uppercase mb-1`}>
                          {project.role}
                        </p>
                        <Link
                          href={`/project/${project.slug}`}
                          className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight hover:text-primary transition-colors cursor-pointer block"
                        >
                          {project.title}
                        </Link>
                      </div>

                      <Link
                        href={`/project/${project.slug}`}
                        className="shrink-0 p-2.5 rounded-xl border border-border/40 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-all bg-background/50 hover:bg-primary/10 cursor-pointer"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>

                    {project.impact && (
                      <div className="bg-primary/5 rounded-xl border border-primary/15 p-4 mb-5">
                        <p className="text-xs font-heading font-extrabold text-primary mb-1 uppercase font-mono">
                          Measurable Impact
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">{project.impact}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-background text-muted-foreground text-xs font-mono rounded-md border border-border/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-border/30">
                      <Link
                        href={`/project/${project.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.2)] cursor-pointer"
                      >
                        Explore Case Study & Media
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      {(project.siteUrl || project.apkUrl) && (
                        <div className="flex items-center gap-2">
                          {project.siteUrl && (
                            <a
                              href={project.siteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                            >
                              Live Demo <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          {project.apkUrl && (
                            <a
                              href={project.apkUrl}
                              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                            >
                              APK <Download className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center border-t border-border/35 pt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.2)] text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home Page
          </Link>
        </div>
      </main>
    </div>
  );
}