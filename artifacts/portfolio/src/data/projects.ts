export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  description: string;
  detailedDescription: string;
  architecture?: string[];
  challenges?: string[];
  solutions?: string[];
  impact: string;
  metrics?: ProjectMetric[];
  tech: string[];
  color: string;
  accent: string;
  image: string;
  gallery?: string[];
  siteUrl?: string;
  apkUrl?: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    slug: "teen-patti-stars",
    title: "Teen Patti Stars — Custom CMS & Web Platform",
    category: "CMS & Real-Time Support",
    role: "Full-Stack Engineer & System Architect",
    summary:
      "High-performance gaming portal and custom CMS with dynamic content management, real-time customer support, payment receipt verification, and Telegram escalation workflows.",
    description:
      "Designed and engineered a high-performance gaming portal and custom CMS with dynamic content management, real-time customer support, payment receipt verification, and Telegram escalation workflows.",
    detailedDescription:
      "Built a lightweight, robust MVC platform using Node.js, Express, SQLite, and Tailwind CSS. The solution features custom rich-text blogging, customizable landing page sections, promotional banner engines, player review management, FAQ schemas, and secure media uploads. Engineered an interactive live support widget powered by Server-Sent Events (SSE) and integrated with the Telegram Bot API for instant operator escalation and multi-agent chat handoff. Configured dynamic XML sitemaps, canonical URL structures, Open Graph media cards, JSON-LD structured data graphs, and hardened HTTP headers for maximum security.",
    architecture: [
      "Node.js & Express modular router architecture with MVC pattern",
      "Real-time Server-Sent Events (SSE) combined with Telegram Bot API hooks",
      "Optimized SQLite persistence with WAL mode for rapid concurrent reads",
      "Dynamic XML sitemaps, robots.txt generation, and JSON-LD schema graphs",
      "Process clustering & zero-downtime maintenance with PM2 on Linux",
    ],
    challenges: [
      "Eliminating reliance on costly third-party live chat SaaS services while preserving sub-second notification speeds.",
      "Ensuring lightweight page loads across high-latency mobile networks for thousands of concurrent users.",
    ],
    solutions: [
      "Engineered an in-house real-time notification gateway using SSE and Telegram Bot topics.",
      "Optimized asset pipelines with Tailwind CSS v4, dynamic caching, and compressed static bundles.",
    ],
    impact:
      "Achieved sub-second page loads with server response times under 100ms, 100% mobile responsiveness, and zero recurring SaaS subscription costs for the client.",
    metrics: [
      { label: "Server Response Time", value: "<100ms" },
      { label: "SaaS Cost Reduction", value: "100%" },
      { label: "Uptime Reliability", value: "99.9%" },
    ],
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
    image: "/tps-upwork.png",
    gallery: ["/tps-upwork.png"],
    featured: true,
  },
  {
    slug: "betmax-pro-operations",
    title: "BetMax Pro Operations",
    category: "Casino & Platform",
    role: "Casino Platform Manager & Tech Lead",
    summary:
      "End-to-end management of a high-traffic online casino platform — overseeing game provider integrations, real-time technical support, player retention analytics, and regulatory compliance.",
    description:
      "Led end-to-end management of a high-traffic online casino platform — overseeing game provider integrations, real-time technical support, player retention analytics, and regulatory compliance. Maintained 99.9% uptime across peak traffic events.",
    detailedDescription:
      "Directed daily technical operations and commercial provider relationships for a tier-1 online gaming platform. Managed real-time API integrations with leading casino game providers (Evolution, Pragmatic Play, NetEnt). Built custom admin dashboards to track player activity metrics and automated anti-money laundering (AML) and KYC compliance verification pipelines, which cut audit reporting turnaround time by over 50%. Established a 24/7 NOC workflow coordinating technical escalations between infrastructure engineers and provider technical desks.",
    architecture: [
      "High-throughput game provider API ingestion & webhook callback pipelines",
      "Automated compliance and anti-money laundering (AML) verification workflows",
      "Custom telemetry dashboards for live player liquidity and game round monitoring",
      "Disaster recovery and high-availability database failover architecture",
    ],
    challenges: [
      "Maintaining continuous 99.9%+ availability during massive simultaneous live-dealer and sports betting peaks.",
      "Synchronizing real-time wallet transactions across external provider game sessions without balance discrepancies.",
    ],
    solutions: [
      "Implemented idempotent transaction verification and transactional rollback locks.",
      "Created proactive automated alerting for game latency degradation and connection drops.",
    ],
    impact:
      "Stabilized platform operations to guarantee 99.97% service availability during major tournament events, boosting player lifetime value (LTV) by 25%.",
    metrics: [
      { label: "Platform Uptime", value: "99.97%" },
      { label: "Player LTV Increase", value: "+25%" },
      { label: "Audit Turnaround", value: "-50% Time" },
    ],
    tech: ["Platform Management", "REST APIs", "Data Analysis", "Regulatory Compliance", "B2B Support", "Payment Gateways"],
    color: "from-blue-600/30 via-purple-600/20 to-blue-900/30",
    accent: "text-blue-400",
    image: "/Casino.png",
    gallery: ["/Casino.png"],
    featured: true,
  },
  {
    slug: "growthstream-analytics",
    title: "GrowthStream Analytics & Attribution",
    category: "Analytics & SEO",
    role: "Attribution Analyst & Technical SEO Specialist",
    summary:
      "Mobile attribution pipelines and search optimization delivering over 150% organic acquisition growth for fintech applications.",
    description:
      "Architected full mobile attribution pipelines for a fintech startup using Appsflyer and Adjust. Paired with a deep technical SEO overhaul — resolving crawl issues, improving Core Web Vitals, and restructuring content — resulting in 150%+ organic traffic growth.",
    detailedDescription:
      "Formulated a robust data collection strategy to track organic acquisition funnels across both web and native mobile apps. Configured deep linking structures, attribution callbacks, and cross-channel tracking parameters inside AppsFlyer and Adjust dashboards to eliminate conversion data discrepancy. On search acquisition, executed thorough code audits to optimize page loading speeds, refactor rendering sequences to boost Google Core Web Vitals grades, and build semantic structured data schema graphs that allowed the landing pages to secure Google Rich Snippet placements.",
    architecture: [
      "Cross-platform attribution pipelines linking web landing funnels to native iOS/Android SDKs",
      "Unified Google Analytics 4 (GA4) custom event definitions and BigQuery data exports",
      "Automated server-side postback triggers for ad network campaign optimization",
      "JSON-LD structured data graphs with Organization, Breadcrumb, and FAQ schemas",
    ],
    challenges: [
      "Resolving multi-touch attribution discrepancies across paid ad networks and organic mobile app store installs.",
      "Fixing render-blocking scripts and layout shifts that penalized mobile search visibility.",
    ],
    solutions: [
      "Calibrated attribution lookback windows, deep link routing, and fingerprinting fallback strategies.",
      "Restructured critical CSS delivery and optimized web fonts, earning 95+ Core Web Vitals performance scores.",
    ],
    impact:
      "Drove 150% growth in organic mobile-app downloads within nine months and diminished customer acquisition costs (CAC) by 32%.",
    metrics: [
      { label: "Organic Downloads", value: "+150%" },
      { label: "CAC Reduction", value: "-32%" },
      { label: "Core Web Vitals", value: "98/100" },
    ],
    tech: ["Appsflyer", "Adjust SDK", "Technical SEO", "Google Analytics 4", "Structured Data Schema", "Looker Studio"],
    color: "from-green-600/30 via-emerald-600/20 to-teal-900/30",
    accent: "text-green-400",
    image: "/Seo.png",
    gallery: ["/Seo.png"],
    featured: true,
  },
  {
    slug: "nova-creative-hub",
    title: "Nova Creative Hub Workspace",
    category: "Web & Design",
    role: "Lead Full-Stack WordPress Developer & Designer",
    summary:
      "Custom bespoke WordPress architecture built from scratch with Advanced Custom Fields, custom post types, GSAP micro-animations, and visual brand identity.",
    description:
      "Designed and developed a fully custom WordPress theme for a boutique creative agency. Built from scratch with Advanced Custom Fields, custom post types, GSAP animations, and a suite of bespoke graphic assets aligned with the brand identity.",
    detailedDescription:
      "Designed a complete visual style guide and translated high-fidelity mockup canvases from Figma into a custom WordPress theme completely built from scratch, with zero bloated template builders. Coded robust Gutenberg content block registries, flexible control systems via Advanced Custom Fields (ACF) Pro, and configured custom REST API content endpoints. Embedded visual storytelling pathways across the experience by crafting hardware-accelerated scroll animations utilizing GreenSock (GSAP) and ScrollTrigger engines.",
    architecture: [
      "Zero-builder, lightweight bespoke PHP & WordPress theme architecture",
      "ACF Pro flexible content blocks tailored for dynamic page composition",
      "Hardware-accelerated GSAP & ScrollTrigger animation timelines",
      "Optimized WebP media delivery with responsive srcset generators",
    ],
    challenges: [
      "Creating rich visual storytelling animations without introducing performance lags on mobile devices.",
      "Delivering an easy-to-use publishing dashboard for content editors without breaking design layouts.",
    ],
    solutions: [
      "Used GPU-accelerated transforms and debounced scroll listeners for GSAP animations.",
      "Built structured ACF field layouts with strict input constraints to maintain visual consistency.",
    ],
    impact:
      "Delivered a lightweight, security-hardened WordPress experience that reduced page-weight footprint by 74% and improved mobile load speeds by 2x.",
    metrics: [
      { label: "Page Weight", value: "-74%" },
      { label: "Mobile Speed", value: "2x Faster" },
      { label: "Client Satisfaction", value: "100%" },
    ],
    tech: ["WordPress Core", "PHP", "ACF Pro", "JavaScript ES6", "GSAP / ScrollTrigger", "Figma Design", "Tailwind CSS"],
    color: "from-orange-600/30 via-rose-600/20 to-red-900/30",
    accent: "text-orange-400",
    image: "/novahub.png",
    gallery: ["/novahub.png"],
    featured: true,
  },
  {
    slug: "techsupport360-portal",
    title: "TechSupport360 Portal",
    category: "Web & Design",
    role: "Full-Stack Engineer & Support Specialist",
    summary:
      "Multi-tier customer support portal integrating ticketing, real-time live chat, and automated knowledge-base systems.",
    description:
      "Developed a multi-tier customer support portal integrating ticketing, live chat, and knowledge-base systems. Reduced average resolution time by 40% and improved CSAT scores through intelligent routing and self-service tooling.",
    detailedDescription:
      "Architected and deployed a multi-tenant client ticketing and self-service portal to alleviate front-line support loads. Engineered a secure Express.js REST API layer that syncs in real-time with internal ticketing engines and databases. Designed and styled an interactive, accessibility-focused React front-end utilizing Tailwind CSS. Implemented a smart search mechanism for local knowledge base documents and added support for live chat web sockets to handle instant queries.",
    architecture: [
      "Express.js & Node.js backend microservices with token authentication",
      "Real-time customer-agent WebSocket messaging pipeline",
      "Full-text fuzzy search engine for self-help knowledge base articles",
      "Tailwind CSS responsive design with keyboard-accessible navigation",
    ],
    challenges: [
      "Handling sudden influxes of support inquiries during service outages without overloading agent queues.",
      "Providing instant answers to repetitive tier-1 technical questions.",
    ],
    solutions: [
      "Engineered automated intent classification to direct common queries to self-service resolution guides.",
      "Implemented WebSocket priority queueing to route VIP issues to senior support engineers immediately.",
    ],
    impact:
      "Deflected 45% of incoming support tier-1 tickets to self-service, reducing overall support ticket resolution cycle times by 40% and boosting customer satisfaction (CSAT) scores.",
    metrics: [
      { label: "Ticket Deflection", value: "45%" },
      { label: "Resolution Time", value: "-40%" },
      { label: "CSAT Rating", value: "4.9 / 5.0" },
    ],
    tech: ["React.js", "Express.js", "WebSockets", "Node.js", "Tailwind CSS", "Technical Support Systems", "PostgreSQL"],
    color: "from-cyan-600/30 via-sky-600/20 to-blue-900/30",
    accent: "text-cyan-400",
    image: "/tech-support.png",
    gallery: ["/tech-support.png"],
    featured: true,
  },
  {
    slug: "fintech-cashflow-mobile",
    title: "Fintech CashFlow Mobile Integrations",
    category: "Analytics & SEO",
    role: "Mobile Integration Consultant",
    summary:
      "Secure callback pipeline and data aggregation feeds mapping multi-channel ad spend to acquired cohorts in PostgreSQL with fraud prevention.",
    description:
      "Constructed a secure, compliant callback system to feed acquisition and campaign expense metrics from multiple channels into a custom unified data warehouse. Designed real-time attribution reports with fraud filters.",
    detailedDescription:
      "Led the technical integration of payment event conversions into advertising tracking endpoints. Configured automated cost aggregation systems across key global ad networks (Google Ads, Meta, TikTok) to map campaign spend directly to acquired user-lifetime cohorts in PostgreSQL tables. Designed custom automated data pipeline validation scripts that scan for click-injection signature patterns and synthetic user conversions to defend against mobile advertising channel fraud.",
    architecture: [
      "Automated cost and conversion ingestion workers for Google, Meta, and TikTok APIs",
      "PostgreSQL normalized schema for multi-touch campaign attribution analytics",
      "Click-injection and duplicate transaction detection algorithms",
      "Real-time Slack / Telegram alerting for campaign anomalies",
    ],
    challenges: [
      "Filtering out sophisticated ad fraud botnets attempting to forge install attribution postbacks.",
      "Normalizing wildly differing currency formats and timestamp standards across ad platforms.",
    ],
    solutions: [
      "Designed server-side signature validation and IP geofencing for all incoming postbacks.",
      "Built automated daily ETL routines standardizing all financial metrics to UTC and USD.",
    ],
    impact:
      "Flagged and blocked three fraudulent publisher networks during launch campaigns, saving the client over $18,000 in promotional ad spend.",
    metrics: [
      { label: "Ad Fraud Prevented", value: "$18,000+" },
      { label: "Attribution Accuracy", value: "99.8%" },
      { label: "ETL Latency", value: "<5 min" },
    ],
    tech: ["Data Pipelines", "Database Schemas", "Campaign Cost Aggregation", "Fraud Prevention", "Adjust Callback API", "PostgreSQL"],
    color: "from-emerald-600/30 via-teal-600/20 to-cyan-950/30",
    accent: "text-emerald-400",
    image: "/Seo.png",
    gallery: ["/Seo.png"],
    featured: false,
  },
  {
    slug: "pulse-casino-engagement",
    title: "Pulse Casino User Engagement Engine",
    category: "Casino & Platform",
    role: "Platform Operations Analyst & Developer",
    summary:
      "Automated promotion engine delivering personalized loyalty rewards and VIP retention actions relative to real-time player telemetry.",
    description:
      "Designed an automated custom promotion server that delivers loyalty rewards and bonus items relative to real-time player action sequences on slot and table feeds.",
    detailedDescription:
      "Spearheaded user retention engineering for a growing B2C gaming brand. Built backend triggers that monitor live gaming telemetry flows via WebSockets. If a VIP player experiences a consecutive loss sequence, the engine immediately prompts an automated host callback and allocates a customized, real-time balance rebate to encourage engagement and reinforce user retention pipelines safely.",
    architecture: [
      "Real-time game event stream evaluation with WebSocket listeners",
      "Dynamic rule engine for automated loyalty credit disbursement",
      "VIP host alerting integration with customer relationship management (CRM) tools",
      "Comprehensive audit trail recording all loyalty allocations",
    ],
    challenges: [
      "Evaluating gaming event streams in real-time under high concurrency without slowing game servers.",
      "Balancing player retention incentives against platform margin requirements.",
    ],
    solutions: [
      "Utilized asynchronous event queues to decouple bonus evaluation from core game processing.",
      "Configured dynamic RTP guardrails ensuring automated rewards remained strictly within risk margins.",
    ],
    impact:
      "Improved VIP client retention metrics by 18% month-over-month and successfully increased reactivation conversion percentages by 12%.",
    metrics: [
      { label: "VIP Retention", value: "+18%" },
      { label: "Reactivation Rate", value: "+12%" },
      { label: "Host Response", value: "<60 sec" },
    ],
    tech: ["Casino Telemetry APIs", "WebSockets", "Player LTV Analytics", "CRM Marketing Automation", "Node.js"],
    color: "from-purple-600/30 via-rose-600/20 to-purple-950/30",
    accent: "text-purple-400",
    image: "/Casino.png",
    gallery: ["/Casino.png"],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
