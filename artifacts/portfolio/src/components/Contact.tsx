import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactEmail = "marksylver01@gmail.com";
const contactEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(`Message failed to send. Please email me directly at ${contactEmail}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Whether you need a full-stack application, an aggressive SEO strategy, mobile attribution setup, or platform management — I'm ready to help you execute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-4 group p-4 rounded-xl border border-border/40 bg-background/60 hover:border-primary/40 transition-all"
              data-testid="contact-email-link"
            >
              <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="font-semibold text-sm">{contactEmail}</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/tochimarksylver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-xl border border-border/40 bg-background/60 hover:border-[#0A66C2]/40 transition-all"
              data-testid="contact-linkedin-link"
            >
              <div className="w-11 h-11 bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] transition-all">
                <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="font-semibold text-sm">Onyekwere Tochi Marksylver</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-background/60">
              <div className="w-11 h-11 bg-secondary flex items-center justify-center rounded-xl shrink-0">
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="font-semibold text-sm">Nigeria — Open to Remote</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-sm font-semibold text-foreground mb-1">Response time</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I typically respond within 24 hours. For urgent projects, mention it in your message.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-background border border-border/40 p-8 rounded-2xl"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12" data-testid="contact-success">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-heading font-bold">Message sent!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-2 text-xs font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-secondary/40 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all placeholder:text-muted-foreground/50"
                      placeholder="Your name"
                      required
                      data-testid="contact-input-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full bg-secondary/40 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all placeholder:text-muted-foreground/50"
                      placeholder="your@email.com"
                      required
                      data-testid="contact-input-email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full bg-secondary/40 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all placeholder:text-muted-foreground/50"
                    placeholder="Project Inquiry"
                    required
                    data-testid="contact-input-subject"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-secondary/40 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project, timeline, and goals..."
                    required
                    data-testid="contact-input-message"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground font-semibold rounded-lg py-3.5 flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_24px_hsl(var(--primary)/0.2)] text-sm disabled:cursor-not-allowed disabled:opacity-70"
                  data-testid="contact-submit"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
