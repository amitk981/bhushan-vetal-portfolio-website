import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const PHILOSOPHY = [
  {
    title: "Design as Strategy",
    text: "Great design is not decoration — it is a strategic instrument that shapes perception, drives consumer choice, and creates measurable business value.",
  },
  {
    title: "Systems Thinking",
    text: "I design with systems in mind: brand architectures, packaging ranges, and digital products that scale with clarity and consistency across every touchpoint.",
  },
  {
    title: "Evidence-Led Creativity",
    text: "Every creative decision is grounded in consumer insight, market context, and business objectives — creativity in service of outcomes.",
  },
  {
    title: "Leadership as Craft",
    text: "Building high-performing creative teams is its own design challenge — one that demands clarity, empathy, and a commitment to excellence.",
  },
];

const EXPERTISE_AREAS = [
  "FMCG & CPG Branding",
  "Packaging Architecture",
  "D2C Brand Strategy",
  "Retail & Export Markets",
  "Creative Team Leadership",
  "UX/UI Design Systems",
  "Campaign Design",
  "Design Education",
];

export function About() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1.5rem" }}
              >
                About
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#FFFFFF", marginBottom: "2rem" }}
              >
                Design Director<br />
                <span style={{ color: "#F97316" }}>& Brand Leader</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#A1A1AA", lineHeight: 1.75, marginBottom: "1.5rem" }}
              >
                Bhushan Vetal is a multidisciplinary Design Director and Brand & Packaging Innovation
                Leader with 10+ years of experience across FMCG, CPG, Retail, D2C, branding,
                packaging design, creative direction, and digital experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#A1A1AA", lineHeight: 1.75, marginBottom: "2.5rem" }}
              >
                His work spans brand strategy, packaging systems, digital product design, and
                large-scale creative direction — consistently delivering measurable commercial
                outcomes for consumer brands.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#F97316", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, padding: "0.875rem 2rem", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  View Portfolio <ArrowRight size={14} />
                </Link>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid #262626", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, padding: "0.875rem 2rem", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Download Resume
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Profile visual */}
              <div style={{
                aspectRatio: "4/5",
                backgroundColor: "#111111",
                border: "1px solid #262626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, rgba(249,115,22,0.05) 100%)" }} />
                <div style={{ textAlign: "center", position: "relative" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "5rem", fontWeight: 700, color: "rgba(249,115,22,0.15)", letterSpacing: "-0.05em", lineHeight: 1 }}>BV</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#A1A1AA", letterSpacing: "0.1em", textTransform: "uppercase" }}>Bhushan Vetal</p>
                </div>
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", backgroundColor: "rgba(10,10,10,0.9)", padding: "1rem", border: "1px solid #262626" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.25rem" }}>Bhushan Vetal</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#F97316" }}>Design Director & Brand Innovation Leader</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section style={{ padding: "5rem 2rem", borderBottom: "1px solid #262626", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.h2 {...fadeUp} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "3rem" }}>
            Roles & Credentials
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", backgroundColor: "#262626" }}>
            {[
              { role: "Deputy Manager", detail: "Design & Branding" },
              { role: "Creative Director", detail: "Brand & Packaging" },
              { role: "Visiting Faculty", detail: "Design Education" },
              { role: "MBA Marketing", detail: "Graduate Qualification" },
              { role: "UX/UI Professional", detail: "Digital Product Design" },
              { role: "Packaging Specialist", detail: "FMCG / Export Markets" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.07 } }}
                style={{ padding: "2rem", backgroundColor: "#111111" }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.125rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.375rem" }}>{item.role}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#A1A1AA" }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section style={{ padding: "6rem 2rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.h2 {...fadeUp} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "3rem" }}>
            Design Philosophy
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
            {PHILOSOPHY.map((item, i) => (
              <motion.div key={i} {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.1 } }}
                style={{ padding: "2rem", backgroundColor: "#111111", border: "1px solid #262626" }}>
                <div style={{ width: 32, height: 2, backgroundColor: "#F97316", marginBottom: "1.5rem" }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.125rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.75rem" }}>{item.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#A1A1AA", lineHeight: 1.65 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem" }}>
          <div>
            <motion.h2 {...fadeUp} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "1.5rem" }}>
              Industry Expertise
            </motion.h2>
            <motion.p {...fadeUp} style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#A1A1AA", lineHeight: 1.7, marginBottom: "2rem" }}>
              Deep sector knowledge across consumer goods, retail, and digital — enabling
              design decisions grounded in commercial and cultural context.
            </motion.p>
          </div>
          <motion.div {...fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignContent: "flex-start" }}>
            {EXPERTISE_AREAS.map((area) => (
              <span key={area} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "#FFFFFF", border: "1px solid #262626", padding: "0.5rem 1.25rem", letterSpacing: "0.03em", transition: "border-color 0.2s" }}>
                {area}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
