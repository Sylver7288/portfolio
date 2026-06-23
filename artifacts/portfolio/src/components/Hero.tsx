import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 lg:px-12 pt-20 overflow-hidden bg-background"
      data-testid="hero-section"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary font-mono text-sm md:text-base tracking-widest uppercase mb-4 block" data-testid="hero-subtitle">
            System Builder. Visibility Optimizer. Creative Technologist.
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-heading font-extrabold leading-[1.1] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-testid="hero-title"
        >
          Onyekwere Tochi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Marksylver</span>
        </motion.h1>

        <motion.p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="hero-description"
        >
          I move seamlessly between design studios, analytics dashboards, casino floors, and code editors to build and scale digital products that perform.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
            data-testid="hero-cta-work"
          >
            Explore Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 opacity-50" />
      </motion.div>
    </section>
  );
}
