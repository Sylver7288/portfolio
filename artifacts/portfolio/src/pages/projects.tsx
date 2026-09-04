import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

interface ProjectDetails {
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  role: string;
  impact?: string;
  tech: string[];
  color: string;
  accent: string;
  image?: string;
  siteUrl?: string;
  apkUrl?: string;
}

const allProjects: ProjectDetails[] = [
  {
    title: "BetMax Pro Operations",
    category: "Casino & Platform",
    role: "Casino Platform Manager & Tech Lead",
    description:
      "Led end-to-end management of a high-traffic online casino platform — overseeing game provider integrations, real-time technical support, player retention analytics, and regulatory compliance. Maintained 99.9% uptime across peak traffic events.",
    detailedDescription:
      "Successfully directed the daily technical operations and commercial relationships for a major tier-1 online gaming platform. Managed complex real-time integrations with industry-leading casino game providers (Evolution, Pragmatic Play, NetEnt). Built custom admin dashboards to track player activity metrics and automate anti-money laundering (AML) and compliance checks, which improved reporting turnaround time by over 50%. Established a dedicated NOC (Network Operations Center) workflow to coordinate technical escalations between system engineers and provider support desks, ensuring continuous gameplay services around the clock.",
    impact: "Stabilized operations to guarantee 99.97% service availability during major sporting matches and platform traffic spikes, resulting in a 25% increase in player life-time value (LTV).",
    tech: ["Platform Management", "REST API Integrations", "Data Analysis", "regulatory Compliance", "B2B Support"],
    color: "from-blue-600/30 via-purple-600/20 to-blue-900/30",
    accent: "text-blue-400",
    image: "/Casino.png",
  },
  {
    title: "GrowthStream Analytics Override",
    category: "Analytics & SEO",
    role: "Attribution Analyst & Technical SEO Specialist",
    description:
      "Architected full mobile attribution pipelines for a fintech startup using Appsflyer and Adjust. Paired with a deep technical SEO overhaul — resolving crawl issues, improving Core Web Vitals, and restructuring content — resulting in 150%+ organic traffic growth.",
    detailedDescription:
      "Formulated a robust data collection strategy to track organic acquisition funnels across both web and native mobile apps. Configured deep linking structures, attribution callbacks, and cross-channel tracking parameters inside AppsFlyer and Adjust dashboards to eliminate conversion data discrepancy. On the search acquisition side, performed code audits to optimize page loading speed, refactor rendering sequences to boost Google Core Web Vitals grades, and build semantic structured data schema graphs that allowed the client's landing pages to secure Google Rich Snippet placements.",
    impact: "Drove a 150% growth in organic mobile-app downloads within nine months and diminished customer acquisition costs (CAC) by 32%.",
    tech: ["Appsflyer", "Adjust SDK", "Technical SEO", "Google Analytics 4", "Structured Data Schema"],
    color: "from-green-600/30 via-emerald-600/20 to-teal-900/30",
    accent: "text-green-400",
    image: "/Seo.png",
  },
  {
    title: "Nova Creative Hub Workspace",
    category: "Web & Design",
    role: "Lead Full-Stack WordPress Developer & Designer",
    description:
      "Designed and developed a fully custom WordPress theme for a boutique creative agency. Built from scratch with Advanced Custom Fields, custom post types, GSAP animations, and a suite of bespoke graphic assets aligned with the brand identity.",
    detailedDescription:
      "Designed a complete visual style guide and translated high-fidelity mockup canvases from Figma into a custom WordPress theme completely designed from scratch, with zero bloated template builders. Coded robust Gutenberg content block registries, flexible control systems via Advanced Custom Fields (ACF) Pro, and configured custom REST API content endpoints. Embedded visual storytelling pathways across the experience by crafting buttery-smooth hardware-accelerated scroll animations utilizing GreenSock (GSAP) and ScrollTrigger engines.",
    impact: "Delivered a lightweight, security-hardened WordPress experience that reduced page-weight footprint by 74% and improved mobile load speeds by 2x.",
    tech: ["WordPress Core", "PHP", "ACF Pro", "JavaScript ES6", "GSAP / ScrollTrigger", "Figma Design"],
    color: "from-orange-600/30 via-rose-600/20 to-red-900/30",
    accent: "text-orange-400",
    image: "/novahub.png",
  },
  {
    title: "TechSupport360 Portal",
    category: "Web & Design",
    role: "Full-Stack Engineer & Support Specialist",
    description:
      "Developed a multi-tier customer support portal integrating ticketing, live chat, and knowledge-base systems. Reduced average resolution time by 40% and improved CSAT scores through intelligent routing and self-service tooling.",
    detailedDescription:
      "Architected and deployed a multi-tenant client ticketing and self-service portal to alleviate front-line support loads. Engineered a secure Express.js REST API layer that syncs in real-time with internal ticketing engines and databases. Designed and styled an interactive, accessibility-focused React front-end utilizing Tailwind CSS. Implemented a smart search mechanism for local knowledge base documents and added support for live chat web sockets to handle instant queries.",
    impact: "Deflected 45% of incoming support tier-1 tickets to self-service, reducing overall support ticket resolution cycle times by 40% and boosting customer satisfaction (CSAT) scores.",
    tech: ["React.js", "Express.js", "WebSockets", "Node.js", "Tailwind CSS", "Technical Support Systems"],
    color: "from-cyan-600/30 via-sky-600/20 to-blue-900/30",
    accent: "text-cyan-400",
    image: "/tech-support.png",
  },
  {
    title: "Fintech CashFlow Mobile Integrations",
    category: "Analytics & SEO",
    role: "Mobile Integration Consultant",
    description:
      "Constructed a secure, compliant callback system to feed acquisition and campaign expense metrics from multiple channels into a custom unified data warehouse. Designed real-time attribution reports with fraud filters.",
    detailedDescription:
      "Led the technical integration of payment event conversions into advertising tracking endpoints. Configured automated cost aggregation systems across key global ad networks (Google Ads, Meta, TikTok) to map campaign spend directly to acquired user-lifetime cohorts in PostgreSQL tables. Designed custom automated data pipeline validation scripts that scan for click-injection signature patterns and synthetic user conversions to defend against mobile advertising channel fraud.",
    impact: "Flagged and blocked three fraudulent publisher networks during launch campaigns, saving the client over $18,000 in promotional ad spend.",
    tech: ["Data Pipelines", "Database Schemas", "Campaign Cost Aggregation", "Fraud Prevention", "Adjust Callback API"],
    color: "from-emerald-600/30 via-teal-600/20 to-cyan-950/30",
    accent: "text-emerald-400",
    image: "/Seo.png",
  },
  {
    title: "Pulse Casino User Engagement Engine",
    category: "Casino & Platform",
    role: "Platform Operations Analyst & Developer",
    description:
      "Designed an automated custom promotion server that delivers loyalty rewards and bonus items relative to real-time player action sequences on slot and table feeds.",
    detailedDescription:
      "Spearheaded user retention engineering on a growing B2C gambling brand. Built backend triggers that monitor live gaming telemetry flows via WebSockets. If a VIP player experiences a consecutive loss sequence, the engine immediately prompts an automated host callback and allocates a customized, real-time balance rebate to encourage engagement and reinforce user retention pipelines safely.",
    impact: "Improved VIP client retention metrics by 18% month-over-month and successfully increased reactivation conversion percentages by 12%.",
    tech: ["Casino Telemetry APIs", "WebSockets", "Player LTV Analytics", "CRM Marketing Automation", "Node.js"],
    color: "from-purple-600/30 via-rose-600/20 to-purple-950/30",
    accent: "text-purple-400",
    image: "/Casino.png",
  },
  {
    title: "Custom Gaming CMS & Telegram Support Portal",
    category: "CMS & Real-Time Support",
    role: "Node.js Full-Stack Engineer",
    description:
      "Designed and engineered a high-performance gaming portal and custom CMS with dynamic content management, real-time customer support, payment receipt verification, and Telegram escalation workflows.",
    detailedDescription:
      "Built a lightweight MVC platform with Express, SQLite, Tailwind CSS, and Multer for rich-text blogs, landing pages, reviews, FAQs, promotional banners, media uploads, and SEO metadata. Engineered a live support widget with an automated knowledge-base bot, Server-Sent Events for real-time updates, and Telegram Bot API topics for seamless operator handoff. Added dynamic XML sitemaps, robots.txt generation, canonical redirects, Open Graph cards, JSON-LD structured data, strict security headers, HSTS, input sanitization, rate limiting, and PM2 clustering for reliable Linux and aaPanel deployments.",
    impact:
      "Delivered sub-second page performance with server response times under 100ms, full mobile responsiveness, and a proprietary CMS and support system with no recurring third-party SaaS costs.",
    tech: [
      "Node.js",
      "Express",
      "SQLite",
      "Tailwind CSS",
      "Server-Sent Events",
      "Telegram Bot API",
      "Technical SEO",
      "PM2",
    ],
    color: "from-amber-600/30 via-orange-600/20 to-slate-950/30",
    accent: "text-amber-400",
  },
];

export default function Projects() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-[45vw] h-[40vw] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <main className="max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-32 md:pb-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-6 hover:opacity-80 group transition-opacity">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 leading-tight">
            Complete Project Portfolio
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            A comprehensive compilation of products, architectures, and platforms I have engineered, optimized, and managed throughout my multi-disciplinary digital career.
          </p>
        </motion.div>

        {/* Projects Listing Grid */}
        <div className="space-y-12">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border border-border/40 bg-card rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 hover:shadow-[0_0_50px_hsl(var(--primary)/0.04)]"
            >
              {/* Visual Panel */}
              <div className={`lg:col-span-4 min-h-64 lg:h-auto bg-gradient-to-br ${project.color} border-b lg:border-b-0 lg:border-r border-border/30 relative overflow-hidden`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-5 rounded-2xl border border-white/10 bg-background/20 shadow-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="space-y-4 p-5">
                      <div className="h-3 w-3/4 rounded-full bg-white/20" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-xl bg-white/10" />
                        <div className="h-20 rounded-xl bg-white/15" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-10 rounded-lg bg-white/10" />
                        <div className="h-10 rounded-lg bg-white/15" />
                        <div className="h-10 rounded-lg bg-white/10" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className={`font-mono text-xs tracking-widest uppercase ${project.accent} bg-background/65 border border-border/25 px-3 py-1.5 rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Advanced Descriptive Grid Content */}
              <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <p className={`font-mono text-xs ${project.accent} font-bold tracking-wider uppercase mb-1`}>
                      {project.role}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-medium">
                    {project.description}
                  </p>

                  {project.detailedDescription && (
                    <div className="mt-4 border-t border-border/30 pt-4 mb-6">
                      <h4 className="text-sm font-heading font-bold text-foreground mb-1.5">Project Overview & Context</h4>
                      <p className="text-muted-foreground/80 text-xs leading-relaxed">
                        {project.detailedDescription}
                      </p>
                    </div>
                  )}

                  {project.impact && (
                    <div className="bg-primary/5 rounded-xl border border-primary/10 p-4 mb-6">
                      <p className="text-xs font-heading font-extrabold text-primary mb-1">MEASURABLE IMPACT</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{project.impact}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-background text-muted-foreground text-xxs font-mono rounded-md border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(project.siteUrl || project.apkUrl) && (
                  <div className="mt-6 flex flex-col gap-3 border-t border-border/30 pt-5 sm:flex-row">
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.apkUrl && (
                      <a
                        href={project.apkUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                      >
                        Install Demo APK
                        <Download className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-border/35 pt-12">
          <Link href="/" className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.2)] text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home Page
          </Link>
        </div>
      </main>
    </div>
  );
}