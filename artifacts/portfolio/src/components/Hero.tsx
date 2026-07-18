import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import Globe from "@/components/Globe";

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 lg:px-12 pt-24 pb-16 overflow-hidden bg-background"
      data-testid="hero-section"
    >
      {/* 3D Interactive Globe Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[650px] md:h-[650px] opacity-25 md:opacity-35 pointer-events-auto z-0 select-none">
        <Globe
          scale={9}
          outlineColor="#1ae5fa"
          graticuleColor="#222227"
          oceanColor="#09090b"
          dots={{ color: "#1ae5fa", size: 3, density: 7, allDots: false }}
          showOutline={true}
          showGrid={true}
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-5 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            data-testid="hero-title"
          >
            Onyekwere
            <br />
            Tochi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-400">
              Marksylver
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-xl mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Web Developer · Technical Support Specialist · SEO Expert · Mobile Attribution Analyst · Graphic Designer · Casino Platform Manager
          </motion.p>

          <motion.p
            className="text-muted-foreground/70 text-sm max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            data-testid="hero-description"
          >
            I move seamlessly between code editors, analytics dashboards, design studios, and casino back-offices — building and scaling digital products that perform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_hsl(var(--primary)/0.25)] text-sm"
              data-testid="hero-cta-work"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-7 py-3.5 border border-border/60 text-foreground font-semibold rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
              data-testid="hero-cta-contact"
            >
              <Download className="w-4 h-4" />
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Right: photo placeholder */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-72 h-80 lg:w-80 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-purple-500/20 to-cyan-500/20 blur-2xl scale-110 -z-10" />
            {/* Card */}
            <div
              className="w-full h-full rounded-2xl border border-border/50 bg-card overflow-hidden flex flex-col items-center justify-center gap-4 text-center p-6 relative"
              data-testid="hero-photo-card"
            >
              {/* Photo placeholder — replace src below with real photo path */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 relative">
                <img
                  src="/syl.jpg"
                  className="w-full h-full object-cover"
                  alt="Onyekwere Tochi Marksylver"
                  onError={(e) => {
                    // Fallback to text initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      const fallback = document.createElement('div');
                      fallback.className = "w-full h-full bg-gradient-to-br from-primary/40 to-purple-500/40 flex items-center justify-center text-4xl font-heading font-bold text-primary select-none";
                      fallback.innerText = "OT";
                      e.currentTarget.parentElement.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div>
                <p className="font-heading font-bold text-lg">Tochi Marksylver</p>
                <p className="text-muted-foreground text-sm mt-1">Digital Strategist & Developer</p>
              </div>
              <div className="w-full border-t border-border/40 pt-4 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-bold text-lg text-primary">6+</p>
                  <p className="text-xs text-muted-foreground">Years Exp.</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-primary">8</p>
                  <p className="text-xs text-muted-foreground">Disciplines</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-40">Scroll</span>
        <ChevronDown className="w-5 h-5 opacity-30" />
      </motion.div>
    </section>
  );
}
