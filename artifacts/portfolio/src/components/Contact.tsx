import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form behavior
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Let's build something exceptional.</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Whether you need a full-stack application, an aggressive SEO strategy, or comprehensive platform management, I'm ready to help you execute.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">Contact via Email</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded group-hover:bg-[#0A66C2] transition-colors">
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold">Onyekwere Tochi Marksylver</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border/50 p-8 rounded"
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full bg-secondary/50 border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-secondary/50 border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold rounded py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                data-testid="contact-submit"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
