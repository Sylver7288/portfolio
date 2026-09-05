import React, { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  Layers,
  Cpu,
  TrendingUp,
  Maximize2,
  X,
  Send,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { projectsData, getProjectBySlug, ProjectItem } from "@/data/projects";
import { useSEO } from "@/hooks/use-seo";

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/project/:slug");
  const slug = params?.slug ?? "";
  const project: ProjectItem | undefined = getProjectBySlug(slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useSEO({
    title: project
      ? `${project.title} | Case Study by Tochi Marksylver`
      : "Project Case Study | Tochi Marksylver",
    description: project
      ? project.description
      : "Detailed case study and technical breakdown by Onyekwere Tochi Marksylver.",
    image: project?.image,
    schema: project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          headline: project.title,
          description: project.description,
          author: {
            "@type": "Person",
            name: "Onyekwere Tochi Marksylver",
          },
          image: project.image,
          keywords: project.tech.join(", "),
          url: project.siteUrl,
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
        <Navbar />
        <div className="max-w-md space-y-4">
          <p className="font-mono text-primary text-xs uppercase tracking-widest">404 Not Found</p>
          <h1 className="text-3xl font-heading font-extrabold">Project Not Found</h1>
          <p className="text-muted-foreground text-sm">
            The project case study you are looking for doesn't exist or has been relocated.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore All Projects
          </Link>
        </div>
      </div>
    );
  }

  // Determine prev and next projects for footer navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[45vw] h-[40vw] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <main className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-28 relative z-10">
        {/* Navigation Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between gap-4 mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-xs tracking-wider uppercase group transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <span className={`font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-border/40 bg-card/60 ${project.accent}`}>
            {project.category}
          </span>
        </motion.div>

        {/* Project Header & Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 space-y-4"
        >
          <p className={`font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase ${project.accent}`}>
            {project.role}
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Hero Media Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-6 rounded-2xl sm:rounded-3xl border border-border/50 bg-card/80 overflow-hidden shadow-2xl group"
        >
          <div className={`w-full min-h-[280px] sm:min-h-[420px] lg:min-h-[500px] bg-gradient-to-br ${project.color} relative flex items-center justify-center p-4 sm:p-8`}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-auto max-h-[560px] object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            />

            {/* Click to expand overlay button */}
            <button
              onClick={() => setSelectedImage(project.image)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/80 hover:bg-background border border-border/60 text-xs font-semibold text-foreground backdrop-blur-md transition-all shadow-lg cursor-pointer"
              aria-label="View full image"
            >
              <Maximize2 className="w-3.5 h-3.5 text-primary" />
              <span>Expand Preview</span>
            </button>
          </div>
        </motion.div>

        {/* Action Button Bar Under Image */}
        {project.siteUrl && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-12"
          >
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_45px_hsl(var(--primary)/0.4)] group"
            >
              <span>Click to View Live Site</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
              >
                <span>Download APK</span>
                <Download className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        )}

        {/* Key Metrics Strip (if provided) */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="border border-border/40 rounded-2xl p-6 bg-card/60 backdrop-blur-sm text-center flex flex-col items-center justify-center hover:border-primary/30 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mb-1 tracking-tight">
                  {metric.value}
                </p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Deep Dive Content Sections */}
        <div className="space-y-10">
          {/* Detailed Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border/40 rounded-2xl p-6 sm:p-8 bg-card/50"
          >
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Project Overview & Scope</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">Background & Context</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-normal">
              {project.detailedDescription}
            </p>
          </motion.section>

          {/* Architecture & Engineering Decisions */}
          {project.architecture && project.architecture.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border/40 rounded-2xl p-6 sm:p-8 bg-card/50"
            >
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
                <Cpu className="w-4 h-4" />
                <span>Technical Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5">Engineering & System Design</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architecture.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-background/50">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="border border-border/40 rounded-2xl p-6 sm:p-8 bg-card/50">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest mb-3">
                  <Layers className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <h3 className="text-lg font-heading font-bold mb-4">Core Roadblocks</h3>
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.solutions && (
                <div className="border border-border/40 rounded-2xl p-6 sm:p-8 bg-card/50">
                  <div className="flex items-center gap-2 text-green-400 font-mono text-xs uppercase tracking-widest mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Solution</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-4">Applied Implementation</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.section>
          )}

          {/* Measurable Business Impact */}
          {project.impact && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-primary/20 rounded-2xl p-6 sm:p-8 bg-primary/5"
            >
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Measurable Results</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Business & Performance Impact</h2>
              <p className="text-sm sm:text-base text-foreground leading-relaxed font-normal">
                {project.impact}
              </p>
            </motion.section>
          )}

          {/* Tech Stack & External Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border/40 rounded-2xl p-6 sm:p-8 bg-card/50"
          >
            <h3 className="text-base font-heading font-bold mb-4 uppercase tracking-wider text-muted-foreground text-xs">
              Technologies & Infrastructure Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 bg-secondary/70 text-secondary-foreground text-xs rounded-lg font-mono border border-border/40"
                >
                  {t}
                </span>
              ))}
            </div>

            {(project.siteUrl || project.apkUrl) && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/30">
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  >
                    Visit Live Project
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.apkUrl && (
                  <a
                    href={project.apkUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/40 text-primary font-semibold text-xs hover:bg-primary/10 transition-all"
                  >
                    Download Demo APK
                    <Download className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </motion.section>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="mt-16 pt-12 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/project/${prevProject.slug}`}
            className="group flex flex-col p-6 rounded-2xl border border-border/40 bg-card hover:border-primary/40 transition-all text-left"
          >
            <span className="flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Previous Case Study
            </span>
            <span className="font-heading font-bold text-base sm:text-lg line-clamp-1">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/project/${nextProject.slug}`}
            className="group flex flex-col p-6 rounded-2xl border border-border/40 bg-card hover:border-primary/40 transition-all text-right items-end"
          >
            <span className="flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
              Next Case Study
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-heading font-bold text-base sm:text-lg line-clamp-1">
              {nextProject.title}
            </span>
          </Link>
        </div>

        {/* Global Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home Portfolio Section
          </Link>
        </div>
      </main>

      {/* Full-Screen Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              alt="Full-size project preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
