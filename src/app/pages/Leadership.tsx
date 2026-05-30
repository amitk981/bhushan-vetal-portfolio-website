import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Users, Settings, GraduationCap, Handshake, Truck, Network } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const LEADERSHIP_DOMAINS = [
  {
    number: "01",
    icon: Users,
    title: "Team Leadership",
    detail: "Led cross-disciplinary creative teams of 20+ professionals across packaging, branding, and digital. Built cultures of quality, accountability, and creative ambition.",
    metrics: ["20+ direct reports", "3 creative disciplines", "2 geographic locations"],
  },
  {
    number: "02",
    icon: Settings,
    title: "Creative Operations",
    detail: "Designed scalable systems for high-volume packaging and campaign output. Introduced critique frameworks, delivery workflows, and quality checkpoints that reduced rework by 40%.",
    metrics: ["250+ SKUs managed", "40% rework reduction", "On-time delivery ↑32%"],
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Mentoring & Development",
    detail: "Developed junior and mid-level designers through structured critique sessions, career planning, and real-world project ownership. Several mentees promoted to senior roles.",
    metrics: ["15+ designers mentored", "Visiting Faculty role", "4 promotions facilitated"],
  },
  {
    number: "04",
    icon: Handshake,
    title: "Stakeholder Management",
    detail: "Regular partner to CMOs, Brand Directors, and international clients. Translated complex creative decisions into business language and earned trusted-advisor status.",
    metrics: ["C-suite partnerships", "Cross-border briefs", "100% client retention"],
  },
  {
    number: "05",
    icon: Truck,
    title: "Vendor Management",
    detail: "Managed print, production, and digital vendor ecosystems across domestic and export markets. Negotiated pricing, managed timelines, and upheld brand quality standards.",
    metrics: ["30+ vendor relationships", "Export market coverage", "Quality benchmarks set"],
  },
  {
    number: "06",
    icon: Network,
    title: "Cross-functional Collaboration",
    detail: "Acted as the bridge between design, marketing, sales, supply chain, and R&D — ensuring creative strategy remained aligned with business objectives at every stage.",
    metrics: ["5 functions aligned", "Integrated briefs led", "Innovation pipeline built"],
  },
];

const ACHIEVEMENTS = [
  { year: "2023", achievement: "Led packaging redesign of 80-SKU range — completed 6 weeks ahead of schedule" },
  { year: "2022", achievement: "Built design operations framework adopted across three business units" },
  { year: "2021", achievement: "Directed award-winning brand campaign — industry recognition in creative excellence" },
  { year: "2020", achievement: "Launched D2C design system — reduced design-to-publish time by 60%" },
  { year: "2019", achievement: "Grew creative team from 6 to 20 in 18 months while maintaining quality output" },
  { year: "2018", achievement: "Entered two new export markets with dedicated packaging architecture" },
];

export function Leadership() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", paddingTop: 72 }}>
      {/* Header */}
      <section style={{ padding: "5rem 2rem 4rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1.5rem" }}>
            Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#FFFFFF", marginBottom: "2rem" }}
          >
            Senior Creative
            <br />
            <span style={{ color: "#F97316" }}>Leadership</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#A1A1AA", maxWidth: 600, lineHeight: 1.75 }}
          >
            A track record of building high-performing creative teams, aligning design with
            business strategy, and delivering at executive level across FMCG, D2C, and retail.
          </motion.p>
        </div>
      </section>

      {/* Leadership Domains */}
      <section style={{ padding: "6rem 2rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem" }}>
            {LEADERSHIP_DOMAINS.map((domain, i) => (
              <motion.div
                key={i}
                {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.08 } }}
                style={{ padding: "2.5rem", backgroundColor: "#111111", border: "1px solid #262626", transition: "border-color 0.3s" }}
                whileHover={{ borderColor: "#F97316" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ width: 48, height: 48, backgroundColor: "#0A0A0A", border: "1px solid #262626", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <domain.icon size={22} color="#F97316" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#F97316", letterSpacing: "0.1em" }}>
                    {domain.number}
                  </span>
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.875rem" }}>
                  {domain.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#A1A1AA", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  {domain.detail}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {domain.metrics.map((m) => (
                    <div key={m} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 6, height: 6, backgroundColor: "#F97316", flexShrink: 0, borderRadius: "50%" }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#A1A1AA" }}>{m}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.h2 {...fadeUp} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "3rem" }}>
            Key Achievements
          </motion.h2>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #262626" }}>
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div
                key={i}
                {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.07 } }}
                style={{ display: "flex", gap: "3rem", padding: "1.75rem 0", borderBottom: "1px solid #262626", alignItems: "flex-start" }}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8125rem", fontWeight: 700, color: "#F97316", letterSpacing: "0.05em", flexShrink: 0, paddingTop: "0.125rem", minWidth: 40 }}>
                  {item.year}
                </span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "#FFFFFF", lineHeight: 1.6 }}>
                  {item.achievement}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} style={{ marginTop: "4rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/resume" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#F97316", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, padding: "0.875rem 2rem", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              View Full Resume <ArrowRight size={14} />
            </Link>
            <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid #262626", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, padding: "0.875rem 2rem", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Get in Touch <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
