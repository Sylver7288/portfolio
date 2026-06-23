import React from "react";
import { motion } from "framer-motion";
import { User, Terminal, Briefcase, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-card relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              Bridging the gap between <span className="text-primary">creative vision</span> and <span className="text-purple-400">technical execution.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                I am Onyekwere Tochi Marksylver. Operating out of Nigeria, I've spent my career refusing to be put in a box. I build web applications, analyze mobile attribution data, optimize search visibility, and manage complex casino platforms.
              </p>
              <p>
                Most professionals choose a lane: creative or analytical. I thrive at the intersection. Whether I'm configuring Adjust campaigns for mobile growth, developing a bespoke WordPress theme, or architecting a casino management dashboard, my approach remains the same: meticulous, data-driven, and visually striking.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border border-border/50 p-4 rounded bg-background/50 backdrop-blur-sm">
                <Terminal className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">System Thinker</h3>
                <p className="text-sm text-muted-foreground">Architecting solutions that scale flawlessly.</p>
              </div>
              <div className="border border-border/50 p-4 rounded bg-background/50 backdrop-blur-sm">
                <Zap className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Growth Focused</h3>
                <p className="text-sm text-muted-foreground">Optimizing visibility and tracking attribution.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-background border border-border/50 rounded overflow-hidden relative group p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="z-10 relative">
                <User className="w-12 h-12 text-muted-foreground/30 mb-6" />
                <h3 className="text-2xl font-heading font-bold mb-4">The Command Center</h3>
                <p className="text-muted-foreground">My workflow involves deep focus and a multi-disciplinary toolkit. From terminal commands to design software, everything serves the end goal: delivering uncompromising quality.</p>
              </div>
              
              <div className="z-10 relative">
                <div className="flex items-center gap-4 text-sm font-mono border-t border-border/50 pt-6">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>Available for freelance & full-time roles</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
