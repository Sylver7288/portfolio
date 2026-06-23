import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["about", "skills", "services", "portfolio", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading font-extrabold text-xl tracking-tighter text-foreground hover:text-primary transition-colors"
            data-testid="nav-logo"
          >
            OTM<span className="text-primary">.</span>
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
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-xs rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              data-testid="nav-cta-contact"
            >
              Hire Me
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              data-testid="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-background/98 backdrop-blur-xl border-b border-border/60 shadow-xl md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors text-sm font-semibold uppercase tracking-widest"
                  data-testid={`nav-mobile-link-${item}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-4 py-3 px-4 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors text-center"
                data-testid="nav-mobile-cta"
              >
                Hire Me
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
