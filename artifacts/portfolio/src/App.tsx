import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Switch, Route, Router as WouterRouter } from "wouter";
import Projects from "@/pages/projects";
import { Linkedin, Mail, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-extrabold text-xl tracking-tight mb-1">
            OTM<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-sm">
            Web Developer · SEO · Analytics · Design
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@tochimarksylver.com"
            className="w-9 h-9 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Email"
            data-testid="footer-email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/tochimarksylver"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#"
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

function Home() {
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
      </WouterRouter>
    </TooltipProvider>
  );
}

export default App;
