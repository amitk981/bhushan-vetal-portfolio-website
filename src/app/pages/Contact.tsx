import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, FileText, Send, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const PROJECT_TYPES = [
  "Design Leadership Role",
  "Brand Strategy Consultancy",
  "Packaging Design Project",
  "UX/UI Design Project",
  "Creative Direction",
  "Speaking / Teaching",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#111111",
    border: "1px solid #262626",
    color: "#FFFFFF",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1rem",
    padding: "0.875rem 1rem",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
    borderRadius: 0,
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#A1A1AA",
    display: "block",
    marginBottom: "0.625rem",
  };

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", paddingTop: 72 }}>
      {/* Header */}
      <section style={{ padding: "5rem 2rem 4rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1.5rem" }}>
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#FFFFFF", marginBottom: "2rem" }}
          >
            Let's Build Something
            <br />
            <span style={{ color: "#F97316" }}>Meaningful</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#A1A1AA", maxWidth: 580, lineHeight: 1.75 }}
          >
            Open to senior design leadership roles, strategic consultancy engagements, and
            brand partnerships with FMCG companies and global creative organisations.
          </motion.p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 7rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "6rem", alignItems: "start" }}>
          {/* Contact Info */}
          <div>
            <motion.div {...fadeUp} style={{ marginBottom: "3.5rem" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid #262626" }}>
                Get in Touch
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: Mail, label: "Email", value: "bhushan@example.com", href: "mailto:bhushan@example.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/bhushanvetal", href: "#" },
                  { icon: FileText, label: "Resume", value: "Download PDF", href: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", textDecoration: "none" }}
                  >
                    <div style={{ width: 44, height: 44, backgroundColor: "#111111", border: "1px solid #262626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={18} color="#F97316" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A1A1AA", marginBottom: "0.25rem" }}>
                        {item.label}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#FFFFFF" }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} style={{ padding: "2rem", backgroundColor: "#111111", border: "1px solid #262626" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.875rem" }}>
                Availability
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#A1A1AA", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Currently open to senior Design Director and Creative Leadership roles, as well
                as strategic consultancy engagements with established FMCG, retail, and D2C brands.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <div style={{ width: 8, height: 8, backgroundColor: "#22c55e", borderRadius: "50%" }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#A1A1AA" }}>
                  Available for new opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div {...fadeUp}>
            {submitted ? (
              <div style={{ padding: "3rem", backgroundColor: "#111111", border: "1px solid #F97316", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, backgroundColor: "rgba(249,115,22,0.1)", border: "1px solid #F97316", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Send size={24} color="#F97316" />
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.875rem" }}>Message Sent</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#A1A1AA", lineHeight: 1.7 }}>
                  Thank you for reaching out. I'll be in touch within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} style={inputStyle} placeholder="Your full name" onFocus={(e) => (e.target.style.borderColor = "#F97316")} onBlur={(e) => (e.target.style.borderColor = "#262626")} />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="your@email.com" onFocus={(e) => (e.target.style.borderColor = "#F97316")} onBlur={(e) => (e.target.style.borderColor = "#262626")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" style={labelStyle}>Company</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} style={inputStyle} placeholder="Your company or organisation" onFocus={(e) => (e.target.style.borderColor = "#F97316")} onBlur={(e) => (e.target.style.borderColor = "#262626")} />
                </div>

                <div>
                  <label htmlFor="projectType" style={labelStyle}>Project / Opportunity Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                    onBlur={(e) => (e.target.style.borderColor = "#262626")}
                  >
                    <option value="" style={{ backgroundColor: "#111111" }}>Select an option</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} style={{ backgroundColor: "#111111" }}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Tell me about the opportunity or project..."
                    onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                    onBlur={(e) => (e.target.style.borderColor = "#262626")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.625rem",
                    backgroundColor: "#F97316",
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    padding: "1.125rem 2.5rem",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#ea6c0a")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F97316")}
                >
                  Start a Conversation <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
