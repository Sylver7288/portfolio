import React from "react";
import { motion } from "framer-motion";
import { Layers, Activity, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "Full-Stack & CMS Development",
    description: "End-to-end web development with a focus on performant, scalable architectures and bespoke WordPress solutions tailored to your business needs.",
    icon: Layers,
  },
  {
    title: "Growth & SEO Strategy",
    description: "Deep-dive technical SEO and search visibility optimization to ensure your digital real estate ranks, converts, and dominates the market.",
    icon: Activity,
  },
  {
    title: "Mobile Attribution Analytics",
    description: "Expert integration and analysis using Appsflyer and Adjust to track user journeys, measure campaign ROI, and optimize mobile acquisition.",
    icon: Smartphone,
  },
  {
    title: "Platform Management & Design",
    description: "Holistic management of complex casino platforms combined with striking graphic design to maintain cohesive brand identities and seamless operations.",
    icon: Palette,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-card relative overflow-hidden border-t border-border/50">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">What I Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Concrete solutions that drive results. I don't just build things; I ensure they perform, track accurately, and look exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border/50 p-8 rounded relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                <Icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
