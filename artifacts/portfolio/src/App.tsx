import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import Projects from "@/pages/projects";
import { Linkedin, Mail, Github, Home as HomeIcon, UserRound, Wrench, BriefcaseBusiness, Send } from "lucide-react";

const contactEmail = "marksylver01@gmail.com";
const pendingScrollKey = "portfolioPendingScroll";

const mobileNavItems = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "about", label: "About", Icon: UserRound },
  { id: "services", label: "Services", Icon: Wrench },
  { id: "portfolio", label: "Work", Icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", Icon: Send },
];

function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Footer() {
  return (
    <footer className="pt-12 pb-28 md:pb-12 px-6 lg:px-12 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="mb-2 flex items-center justify-center gap-3 md:justify-start">
            <img
              src="/sylvsss-logo.png"
              alt="Sylvsss logo"
              className="h-10 w-10 rounded-xl border border-primary/20 object-cover shadow-[0_0_18px_hsl(var(--primary)/0.14)]"
            />
            <p className="font-heading font-extrabold text-xl tracking-tight">Marksylver</p>
          </div>
          <p className="text-muted-foreground text-sm">
            Web Developer · SEO · Analytics · Design
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contactEmail}`}
            className="w-9 h-9 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Email"
            data-testid="footer-email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/marksylver"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Sylver7288"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="GitHub"
            data-testid="footer-github"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        <p className="text-muted-foreground text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} Onyekwere Tochi Marksylver.<br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function MobileBottomNav() {
  const [location, setLocation] = useLocation();

  const goToSection = (id: string) => {
    if (location !== "/") {
      window.sessionStorage.setItem(pendingScrollKey, id);
      setLocation("/");
      return;
    }

    scrollToSection(id);
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 items-end bg-card/95 border-t border-primary/20 px-2 pt-2 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.38)] backdrop-blur-xl md:hidden"
      aria-label="Mobile bottom navigation"
    >
      {mobileNavItems.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => goToSection(id)}
          className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-1.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          data-testid={`mobile-bottom-nav-${id}`}
        >
          <Icon className="h-5 w-5" strokeWidth={2.4} />
          <span className="truncate text-[10px] font-semibold uppercase leading-none tracking-wide">{label}</span>
        </button>
      ))}
    </nav>
  );
}

function Home() {
  React.useEffect(() => {
    const pendingScroll = window.sessionStorage.getItem(pendingScrollKey);

    if (!pendingScroll) {
      return;
    }

    window.sessionStorage.removeItem(pendingScrollKey);
    window.requestAnimationFrame(() => scrollToSection(pendingScroll));
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
        <MobileBottomNav />
      </WouterRouter>
    </TooltipProvider>
  );
}

export default App;
