import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const ARTICLES = [
  {
    category: "Design Thinking",
    title: "How Design-Led Problem Solving Transforms Consumer Brands",
    excerpt: "Design thinking is not a methodology — it is a cultural shift. When embedded at the strategic level, it reframes how organisations define problems, explore opportunities, and create value for consumers.",
    readTime: "8 min read",
    featured: true,
  },
  {
    category: "Consumer Behaviour",
    title: "The Psychology Behind Packaging and Purchase Decisions",
    excerpt: "Packaging communicates trust in 0.4 seconds. Understanding how colour, structure, and information hierarchy influence the brain at point of purchase is the foundation of effective packaging design.",
    readTime: "6 min read",
    featured: false,
  },
  {
    category: "Packaging Innovation",
    title: "Sustainable Structures and the Future of Shelf-Ready Packaging",
    excerpt: "The industry is at an inflection point. Consumer demand for sustainable packaging collides with retail logistics constraints — and the brands that navigate this tension strategically will lead the next decade.",
    readTime: "10 min read",
    featured: false,
  },
  {
    category: "Brand Strategy",
    title: "Building Durable Brand Equity Through Visual Systems",
    excerpt: "The most resilient brands are not built on logos — they are built on consistent visual languages that express a coherent point of view across every consumer touchpoint, at every scale.",
    readTime: "7 min read",
    featured: false,
  },
  {
    category: "User Experience",
    title: "Applying UX Principles to Physical Brand Touchpoints",
    excerpt: "The principles of UX — usability, hierarchy, feedback, and delight — are not digital-only constructs. Applied to packaging, retail environments, and brand experiences, they create brand interactions that feel effortless.",
    readTime: "6 min read",
    featured: false,
  },
  {
    category: "Sustainability",
    title: "Responsible Design in Consumer Packaging: From Mandate to Market Advantage",
    excerpt: "Sustainability in packaging has evolved from regulatory compliance to commercial differentiator. Brands that operationalise responsible design at the systems level turn constraint into competitive advantage.",
    readTime: "9 min read",
    featured: false,
  },
];

const TOPICS = ["Design Thinking", "Consumer Behaviour", "Packaging Innovation", "Brand Strategy", "User Experience", "Sustainability"];

export function Research() {
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", paddingTop: 72 }}>
      {/* Header */}
      <section style={{ padding: "5rem 2rem 4rem", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1.5rem" }}>
            Research & Perspectives
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#FFFFFF", marginBottom: "2rem" }}
          >
            Insights &<br />
            <span style={{ color: "#F97316" }}>Perspectives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#A1A1AA", maxWidth: 600, lineHeight: 1.75 }}
          >
            Thought leadership on design strategy, consumer psychology, packaging innovation,
            and the future of brand experience.
          </motion.p>
        </div>
      </section>

      {/* Topic Tags */}
      <section style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #262626", backgroundColor: "rgba(10,10,10,0.97)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {TOPICS.map((t) => (
            <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: "#A1A1AA", border: "1px solid #262626", padding: "0.375rem 1rem", cursor: "pointer", transition: "all 0.2s" }}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section style={{ padding: "4rem 2rem", borderBottom: "1px solid #262626" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <motion.div
              {...fadeUp}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center", backgroundColor: "#111111", border: "1px solid #262626", overflow: "hidden" }}
            >
              <div style={{ aspectRatio: "16/9", backgroundColor: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", minHeight: 260 }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, #0A0A0A 100%)" }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#F97316", letterSpacing: "0.2em", textTransform: "uppercase", position: "relative" }}>
                  Featured
                </p>
              </div>
              <div style={{ padding: "2.5rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1rem" }}>
                  {featured.category} · {featured.readTime}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                  {featured.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#A1A1AA", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer" }}>
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section style={{ padding: "4rem 2rem 7rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem" }}>
            {rest.map((article, i) => (
              <motion.div
                key={i}
                {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.08 } }}
                style={{ backgroundColor: "#111111", border: "1px solid #262626", padding: "2.5rem", cursor: "pointer", transition: "border-color 0.3s" }}
                whileHover={{ borderColor: "#F97316" }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", marginBottom: "1.25rem" }}>
                  {article.category} · {article.readTime}
                </p>
                <div style={{ width: "100%", height: 1, backgroundColor: "#262626", marginBottom: "1.5rem" }} />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.25, marginBottom: "1rem" }}>
                  {article.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#A1A1AA", lineHeight: 1.65, marginBottom: "2rem" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Read Article <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
