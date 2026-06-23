import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-background/80 border-b border-border"
      data-testid="navbar"
    >
      <div className="font-heading font-bold text-xl tracking-tight text-foreground cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        OTM.
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {['about', 'skills', 'services', 'portfolio'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider text-xs"
            data-testid={`nav-link-${item}`}
          >
            {item}
          </button>
        ))}
      </nav>
      <button
        onClick={() => scrollTo('contact')}
        className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
        data-testid="nav-cta-contact"
      >
        Hire Me
      </button>
    </motion.header>
  );
}
