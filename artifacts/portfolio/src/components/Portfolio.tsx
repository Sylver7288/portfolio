import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BetMax Pro Operations",
    category: "Casino Platform Management",
    description: "Managed a high-traffic casino platform, overseeing game integrations, technical support pipelines, and real-time analytics to ensure 99.9% uptime and optimal player retention.",
    tech: ["Backoffice Tools", "Technical Support", "Data Analysis"],
    link: "#",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "GrowthStream Analytics",
    category: "Attribution & SEO",
    description: "Implemented full mobile attribution pipelines using Appsflyer and Adjust for a fintech startup, paired with a technical SEO overhaul that increased organic traffic by 150%.",
    tech: ["Appsflyer", "Adjust", "SEO", "Google Analytics"],
    link: "#",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Nova Creative Hub",
    category: "Web Dev & Graphic Design",
    description: "Designed and developed a custom WordPress theme for a creative agency. Built from scratch with advanced custom fields, custom post types, and bespoke graphic assets.",
    tech: ["WordPress", "PHP", "React", "Adobe Creative Suite"],
    link: "#",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A glimpse into how I combine technical architecture with growth strategy.
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-border/30 bg-card rounded overflow-hidden"
              data-testid={`project-card-${index}`}
            >
              <div className={`lg:col-span-5 h-64 lg:h-full bg-gradient-to-br ${project.color} flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-border/30`}>
                <div className="w-full h-full border border-white/10 rounded flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <span className="font-mono text-sm tracking-widest uppercase text-foreground/50">{project.category}</span>
                </div>
              </div>
              
              <div className="lg:col-span-7 p-8 lg:p-12">
                <span className="text-primary font-mono text-xs uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> View Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
