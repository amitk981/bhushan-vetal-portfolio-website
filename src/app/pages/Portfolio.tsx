import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Packaging", "Branding", "UX/UI", "Creative Direction"];

const PROJECTS = [
  {
    id: 1,
    category: "Packaging",
    title: "FMCG Dry Fruits Packaging",
    subtitle: "Premium retail packaging system",
    challenge: "Reposition a commodity dry-fruits brand for modern premium retail.",
    strategy: "Craft editorial aesthetics, muted earth palette, and transparent windows.",
    results: "41% uplift in premium shelf placement, 29% price premium achieved.",
    tags: ["FMCG", "Packaging Architecture", "Retail"],
  },
  {
    id: 2,
    category: "Packaging",
    title: "Frozen Foods Export Packaging",
    subtitle: "Export-ready packaging system",
    challenge: "Build a range architecture that meets international retail standards.",
    strategy: "Consistent brand blocks with modular layouts adaptable per export market.",
    results: "Entered 6 new export markets within 18 months of launch.",
    tags: ["Export", "Range Architecture", "Food"],
  },
  {
    id: 3,
    category: "Branding",
    title: "Brand Identity System",
    subtitle: "Full visual identity & brand guidelines",
    challenge: "Create a scalable identity for a D2C health brand targeting urban millennials.",
    strategy: "Minimal logotype, scientific precision, and confident colour language.",
    results: "100% brand consistency across 300+ touchpoints from day one.",
    tags: ["Identity", "D2C", "Guidelines"],
  },
  {
    id: 4,
    category: "Branding",
    title: "Retail Marketing Campaign",
    subtitle: "360° campaign design & direction",
    challenge: "Drive trial and awareness for a seasonal FMCG product launch.",
    strategy: "Integrated campaign spanning TV, OOH, digital, and in-store POS.",
    results: "28% brand awareness growth; campaign recognised at industry awards.",
    tags: ["Campaign", "OOH", "Digital"],
  },
  {
    id: 5,
    category: "UX/UI",
    title: "D2C E-commerce Platform",
    subtitle: "Full UX strategy & UI design",
    challenge: "Reduce cart abandonment and improve product discovery for a D2C platform.",
    strategy: "User research, IA redesign, progressive disclosure, and design system.",
    results: "22% reduction in cart abandonment; NPS score improved from 34 to 61.",
    tags: ["E-commerce", "Design System", "Mobile"],
  },
  {
    id: 6,
    category: "UX/UI",
    title: "Mobile Application Design",
    subtitle: "Consumer app UX/UI",
    challenge: "Design a loyalty app that feels as premium as the brand it represents.",
    strategy: "Gesture-first navigation, dark premium UI, and personalised content feeds.",
    results: "4.7 App Store rating at launch; 40% monthly active user retention.",
    tags: ["Mobile", "Loyalty", "Consumer"],
  },
  {
    id: 7,
    category: "Creative Direction",
    title: "Fashion Show Production",
    subtitle: "Full creative direction & staging",
    challenge: "Position a regional fashion house as an international creative brand.",
    strategy: "Cinematic set design, brand-integrated staging, and editorial photography.",
    results: "Featured in 4 national publications; 200% social engagement spike.",
    tags: ["Fashion", "Event", "Production"],
  },
  {
    id: 8,
    category: "Creative Direction",
    title: "Corporate Brand Experience",
    subtitle: "Experiential & environmental design",
    challenge: "Transform an annual corporate event into a brand-building experience.",
    strategy: "Environmental branding, interactive installations, and branded content.",
    results: "10,000+ attendees; ranked #1 most engaging brand event in sector survey.",
    tags: ["Event", "Experiential", "Brand"],
  },
];

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#F97316", letterSpacing: "0.15em" }}>
        {number}
      </span>
      <div style={{ width: 40, height: 1, backgroundColor: "#F97316" }} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#A1A1AA", letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
        {label}
      </span>
    </div>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", paddingTop: 72 }}>
      {/* Header */}
      <section style={{ padding: "5rem 2rem 3rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel number="Portfolio" label="Case Studies" />
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
            }}
          >
            Selected
            <br />
            <span style={{ color: "#F97316" }}>Work</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "#A1A1AA",
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            A curated selection of packaging design, brand strategy, UX/UI, and creative
            direction projects built for measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: "2rem", borderBottom: "1px solid #262626", position: "sticky", top: 72, backgroundColor: "rgba(10,10,10,0.97)", backdropFilter: "blur(12px)", zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.5rem 1.25rem",
                border: `1px solid ${activeCategory === cat ? "#F97316" : "#262626"}`,
                backgroundColor: activeCategory === cat ? "#F97316" : "transparent",
                color: activeCategory === cat ? "#FFFFFF" : "#A1A1AA",
                cursor: "pointer",
                borderRadius: "0.125rem",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "4rem 2rem 7rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "1.5rem" }}
            >
              {filtered.map((proj, i) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    backgroundColor: "#111111",
                    border: "1px solid #262626",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.3s",
                  }}
                  whileHover={{ borderColor: "#F97316" }}
                >
                  {/* Visual placeholder */}
                  <div
                    style={{
                      height: 220,
                      backgroundColor: "#0A0A0A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid #262626",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #111111 0%, #0A0A0A 100%)" }} />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4rem", fontWeight: 700, color: "rgba(249,115,22,0.06)", letterSpacing: "-0.05em", position: "relative" }}>
                      {proj.category.substring(0, 2).toUpperCase()}
                    </span>
                    <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "#F97316", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.625rem" }}>
                      {proj.category}
                    </div>
                  </div>

                  <div style={{ padding: "2rem" }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.375rem" }}>
                      {proj.title}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#A1A1AA", marginBottom: "1.5rem" }}>
                      {proj.subtitle}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                      {[
                        { label: "Challenge", text: proj.challenge },
                        { label: "Strategy", text: proj.strategy },
                      ].map((block) => (
                        <div key={block.label}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F97316", marginBottom: "0.375rem" }}>
                            {block.label}
                          </p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#A1A1AA", lineHeight: 1.55 }}>
                            {block.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div style={{ backgroundColor: "#0A0A0A", border: "1px solid #262626", padding: "0.875rem 1rem", marginBottom: "1.5rem" }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F97316", marginBottom: "0.25rem" }}>
                        Results
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#FFFFFF" }}>
                        {proj.results}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {proj.tags.map((tag) => (
                          <span key={tag} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 500, color: "#A1A1AA", border: "1px solid #262626", padding: "0.25rem 0.625rem", letterSpacing: "0.05em" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to="#" style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0, paddingLeft: "1rem" }}>
                        Case Study <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
