import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, CheckCircle2 } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const contactEmail = "marksylver01@gmail.com";
const whatsappNumber = "639761862141";
const telegramUsername = "otm083";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "Project Inquiry").trim();
    const message = String(formData.get("message") ?? "").trim();
    const mailSubject = subject || "Project Inquiry";
    const mailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    form.reset();
    setSubmitted(true);
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

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-xl border border-border/40 bg-background/60 hover:border-[#25D366]/40 transition-all"
              data-testid="contact-whatsapp-link"
            >
              <div className="w-11 h-11 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">WhatsApp</p>
                <p className="font-semibold text-sm">+{whatsappNumber}</p>
              </div>
            </a>

            <a
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-xl border border-border/40 bg-background/60 hover:border-[#229ED9]/40 transition-all"
              data-testid="contact-telegram-link"
            >
              <div className="w-11 h-11 bg-[#229ED9]/10 border border-[#229ED9]/20 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-[#229ED9] group-hover:border-[#229ED9] transition-all">
                <FaTelegramPlane className="w-5 h-5 text-[#229ED9] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Telegram</p>
                <p className="font-semibold text-sm">@{telegramUsername}</p>
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
                <h3 className="text-xl font-heading font-bold">Email draft opened</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Send it from your email app so it reaches me directly at {contactEmail}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-primary hover:underline"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
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

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold rounded-lg py-3.5 flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_24px_hsl(var(--primary)/0.2)] text-sm"
                  data-testid="contact-submit"
                >
                  Open Email Draft
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
