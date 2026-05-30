import { motion } from "motion/react";
import { Download } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const CAREER = [
  {
    period: "2021 – Present",
    role: "Deputy Manager – Design & Branding",
    company: "Leading FMCG Company",
    location: "Mumbai, India",
    type: "role",
    highlights: [
      "Led packaging design for 120+ SKUs across FMCG product lines",
      "Managed cross-functional team of 12 designers and art directors",
      "Drove design strategy for two new D2C brand launches",
      "Reduced time-to-market by 35% through new creative operations framework",
    ],
  },
  {
    period: "2018 – 2021",
    role: "Creative Director",
    company: "Brand Consultancy",
    location: "Mumbai, India",
    type: "role",
    highlights: [
      "Led brand identity and packaging projects for 30+ clients",
      "Directed multi-channel campaign design for FMCG and retail brands",
      "Grew team from 4 to 15 creative professionals",
      "Secured and managed accounts worth ₹2Cr+ in annual revenue",
    ],
  },
  {
    period: "2016 – 2018",
    role: "Senior Designer – Packaging & Branding",
    company: "Design Studio",
    location: "Pune, India",
    type: "role",
    highlights: [
      "Specialised in FMCG, CPG, and export packaging design",
      "Delivered 80+ packaging projects across food, personal care, and lifestyle",
      "Introduced brand guidelines framework adopted across studio operations",
    ],
  },
  {
    period: "2014 – 2016",
    role: "Designer",
    company: "Advertising Agency",
    location: "Pune, India",
    type: "role",
    highlights: [
      "Designed retail branding, point-of-sale, and campaign materials",
      "Worked across print, digital, and OOH formats",
      "Collaborated directly with brand managers and marketing teams",
    ],
  },
];

const EDUCATION = [
  {
    period: "2013 – 2015",
    role: "MBA – Marketing",
    company: "Business School",
    location: "Pune, India",
    type: "education",
    highlights: ["Brand Management", "Consumer Behaviour", "Marketing Strategy", "Strategic Management"],
  },
  {
    period: "2009 – 2013",
    role: "Bachelor of Design",
    company: "Design Institute",
    location: "India",
    type: "education",
    highlights: ["Visual Communication", "Typography", "Packaging Design", "Brand Identity"],
  },
];

const CERTIFICATIONS = [
  { name: "UX Design Professional Certificate", issuer: "Google / Coursera", year: "2022" },
  { name: "Design Thinking", issuer: "IDEO / +Acumen", year: "2021" },
  { name: "Brand Strategy", issuer: "Coursera", year: "2020" },
  { name: "Advanced Packaging Design", issuer: "Industry Programme", year: "2019" },
];

function TimelineItem({ item, index }: { item: typeof CAREER[0]; index: number }) {
  return (
    <motion.div
      {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: index * 0.08 } }}
      style={{ display: "flex", gap: "2rem", position: "relative" }}
    >
      {/* Timeline line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: 14, height: 14, backgroundColor: "#F97316", borderRadius: "50%", flexShrink: 0, marginTop: "0.25rem" }} />
        <div style={{ width: 1, backgroundColor: "#262626", flex: 1, marginTop: "0.5rem", minHeight: 40 }} />
      </div>

      {/* Content */}
      <div style={{ paddingBottom: "3rem", flex: 1 }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.1em", color: "#F97316", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          {item.period}
        </p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.25rem" }}>
          {item.role}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#A1A1AA", marginBottom: "1.25rem" }}>
          {item.company} · {item.location}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {item.highlights.map((h, i) => (
            <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
              <div style={{ width: 6, height: 6, backgroundColor: "#F97316", borderRadius: "50%", flexShrink: 0, marginTop: "0.5rem" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#A1A1AA", lineHeight: 1.6 }}>{h}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Resume() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", paddingTop: 72 }}>
      {/* Header */}
      <section style={{ padding: "5rem 2rem 4rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1.5rem" }}>
              Resume
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#FFFFFF" }}
            >
              Career
              <br />
              <span style={{ color: "#F97316" }}>Timeline</span>
            </motion.h1>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="#"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#F97316", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, padding: "1rem 2rem", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            <Download size={16} /> Download Resume
          </motion.a>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "6rem" }}>
          {/* Career */}
          <div>
            <motion.p {...fadeUp} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "3rem", paddingBottom: "1rem", borderBottom: "1px solid #262626" }}>
              Work Experience
            </motion.p>
            <div>
              {CAREER.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>

            <motion.p {...fadeUp} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#FFFFFF", marginTop: "2rem", marginBottom: "3rem", paddingBottom: "1rem", borderBottom: "1px solid #262626" }}>
              Education
            </motion.p>
            <div>
              {EDUCATION.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Skills */}
            <motion.div {...fadeUp} style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid #262626" }}>
                Core Skills
              </p>
              {[
                { skill: "Brand Strategy", pct: 95 },
                { skill: "Packaging Design", pct: 98 },
                { skill: "Creative Direction", pct: 92 },
                { skill: "UX/UI Design", pct: 85 },
                { skill: "Team Leadership", pct: 90 },
                { skill: "Design Systems", pct: 88 },
              ].map((s, i) => (
                <div key={i} style={{ marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#FFFFFF" }}>{s.skill}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#F97316" }}>{s.pct}%</p>
                  </div>
                  <div style={{ height: 2, backgroundColor: "#262626", borderRadius: 1 }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      style={{ height: "100%", backgroundColor: "#F97316", borderRadius: 1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div {...fadeUp} style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid #262626" }}>
                Certifications
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} style={{ padding: "1.25rem", backgroundColor: "#111111", border: "1px solid #262626" }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.25rem" }}>{cert.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#A1A1AA" }}>{cert.issuer} · {cert.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div {...fadeUp} style={{ position: "sticky", top: "calc(72px + 2rem)", padding: "2rem", backgroundColor: "#111111", border: "1px solid #F97316" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.125rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                Full Resume PDF
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#A1A1AA", marginBottom: "1.5rem" }}>
                Download the complete resume including portfolio highlights.
              </p>
              <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", backgroundColor: "#F97316", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, padding: "0.875rem", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Download size={16} /> Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
