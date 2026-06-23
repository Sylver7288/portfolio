import React from "react";
import { motion } from "framer-motion";
import { Layers, TrendingUp, Smartphone, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layers,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    title: "Full-Stack & CMS Development",
    description:
      "End-to-end web development with performant, scalable architectures. Custom WordPress themes, plugins, and headless CMS solutions tailored precisely to your business.",
    deliverables: ["Custom WordPress Themes", "React / Next.js Apps", "WooCommerce Stores", "API Integration"],
  },
  {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    title: "Technical SEO & Growth Strategy",
    description:
      "Deep-dive technical SEO, structured data, Core Web Vitals optimization, and content strategy to ensure your digital presence ranks, converts, and compounds over time.",
    deliverables: ["Technical SEO Audits", "Keyword Research", "Core Web Vitals", "Content Strategy"],
  },
  {
    icon: Smartphone,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "Mobile Attribution Analytics",
    description:
      "Expert Appsflyer and Adjust configuration to track every user touchpoint, measure campaign ROI accurately, and optimize mobile acquisition funnels with confidence.",
    deliverables: ["Appsflyer Setup", "Adjust Integration", "Fraud Prevention", "Attribution Reporting"],
  },
  {
    icon: Palette,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "Platform Management & Design",
    description:
      "Holistic management of complex casino platforms — game integrations, compliance, back-office operations — paired with striking graphic design that maintains brand cohesion.",
    deliverables: ["Casino Back-office", "Brand Identity", "Marketing Assets", "UI/UX Design"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-card relative overflow-hidden border-t border-border/40">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">What I Offer</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Concrete solutions that drive measurable results — built, tracked, and refined to perform from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background border border-border/40 rounded-xl p-8 relative group overflow-hidden hover:border-primary/30 transition-all hover:shadow-[0_0_32px_hsl(var(--primary)/0.07)]"
                data-testid={`service-card-${index}`}
              >
                <div className="absolute top-0 left-0 w-0.5 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-400 rounded-full" />

                <div className={`inline-flex p-3 rounded-xl border ${service.bg} mb-5`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>

                <h3 className="text-lg font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all"
                  data-testid={`service-cta-${index}`}
                >
                  Let's talk <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
