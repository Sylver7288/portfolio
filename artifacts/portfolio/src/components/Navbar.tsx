import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const navItems = ["about", "skills", "services", "portfolio", "contact"];
const pendingScrollKey = "portfolioPendingScroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    if (location !== "/") {
      setLocation("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    if (location !== "/") {
      window.sessionStorage.setItem(pendingScrollKey, id);
      setLocation("/");
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <button
            onClick={goHome}
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            data-testid="nav-logo"
            aria-label="Go to home"
          >
            <img
              src="/sylvsss-logo.png"
              alt="Sylvsss logo"
              className="h-10 w-10 rounded-xl border border-primary/20 object-cover shadow-[0_0_18px_hsl(var(--primary)/0.18)] transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:inline font-heading font-extrabold text-lg tracking-tight">
              Marksylver
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-link-${item}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-primary text-primary-foreground font-heading font-bold text-xs rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.3)] cursor-pointer"
              data-testid="nav-cta-contact"
            >
              Hire Me
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
