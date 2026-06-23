import React from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, TrendingUp, Users } from "lucide-react";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "8", label: "Core Disciplines" },
];

const traits = [
  {
    icon: Terminal,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    title: "Systems Thinker",
    desc: "Architecturing solutions that scale reliably under pressure.",
  },
  {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    title: "Growth-Driven",
    desc: "Data-informed decisions across SEO, attribution and product strategy.",
  },
  {
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "Creative Edge",
    desc: "Merging technical precision with compelling visual communication.",
  },
  {
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "Cross-Functional",
    desc: "Equally at home with developers, designers, marketers and executives.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-card relative overflow-hidden border-t border-border/40">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-3xl">
            Bridging the gap between{" "}
            <span className="text-primary">creative vision</span> and{" "}
            <span className="text-purple-400">technical execution</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base mb-10">
              <p>
                I'm Onyekwere Tochi Marksylver — a multi-disciplinary digital professional based in Nigeria. Throughout my career, I've deliberately refused to be boxed into one role. I build web applications, run technical SEO campaigns, configure mobile attribution pipelines, manage casino platforms, and craft graphic design assets — often for the same client.
              </p>
              <p>
                My superpower is context-switching without losing depth. Whether configuring Adjust SDK integrations for a mobile fintech app, developing a bespoke WordPress theme, or overseeing casino back-office operations, my standard remains the same: meticulous, data-driven, and visually polished.
              </p>
              <p>
                I believe the best digital products sit at the intersection of technology, design, and strategy — and I've spent years building the toolkit to operate there.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center border border-border/40 rounded-xl p-4 bg-background/50"
                  data-testid={`about-stat-${i}`}
                >
                  <p className="text-2xl font-heading font-extrabold text-primary mb-1">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-border/40 rounded-xl p-6 bg-background/60 hover:border-primary/30 transition-colors group"
                  data-testid={`about-trait-${i}`}
                >
                  <div className={`inline-flex p-2.5 rounded-lg border ${t.bg} mb-4`}>
                    <Icon className={`w-5 h-5 ${t.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-1.5">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
