import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  Package,
  Palette,
  Monitor,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.1 },
});

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "#F97316",
          letterSpacing: "0.15em",
        }}
      >
        {number}
      </span>
      <div style={{ width: 40, height: 1, backgroundColor: "#F97316" }} />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#A1A1AA",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

const METRICS = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Packaging SKUs Delivered" },
  { value: "100+", label: "Brand Campaigns Executed" },
  { value: "20+", label: "Creative Professionals Led" },
];

const EXPERTISE = [
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "Positioning, architecture, and identity systems that create lasting consumer preference and drive market differentiation.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    desc: "250+ SKUs across FMCG, CPG, retail and export markets. Structural and graphic packaging systems built for shelf impact.",
  },
  {
    icon: Monitor,
    title: "UX/UI Design",
    desc: "User-centred digital product design — from research and wireframes to high-fidelity prototypes and design systems.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    desc: "Art direction for campaigns, events, fashion shows, and brand experiences that connect emotionally with audiences.",
  },
  {
    icon: Users,
    title: "Design Leadership",
    desc: "Building and mentoring creative teams, managing cross-functional stakeholders, and scaling design operations.",
  },
  {
    icon: Sparkles,
    title: "Consumer Experience",
    desc: "Holistic experience design across physical and digital touchpoints that strengthens brand loyalty and drives choice.",
  },
];

const PROJECTS = [
  {
    number: "01",
    category: "Packaging Design",
    title: "FMCG Packaging Ecosystem",
    desc: "End-to-end packaging architecture across dry fruits, frozen foods, and export product lines — 120+ SKUs unified under one brand language.",
    impact: "Increased shelf conversion by 34% in retail audits",
    tag: "Packaging",
  },
  {
    number: "02",
    category: "Brand Communication",
    title: "Campaign Leadership & Brand Communication",
    desc: "Multi-channel brand campaigns spanning TV, OOH, digital, and retail environments, leading teams of 15+ creative professionals.",
    impact: "Drove 28% YoY growth in brand awareness metrics",
    tag: "Branding",
  },
  {
    number: "03",
    category: "UX / Product Design",
    title: "D2C Digital Product Experience",
    desc: "End-to-end UX strategy and design for a D2C e-commerce platform — user research, information architecture, and responsive UI design system.",
    impact: "Reduced cart abandonment by 22% post-launch",
    tag: "UX/UI",
  },
  {
    number: "04",
    category: "Creative Direction",
    title: "Corporate & Experiential Events",
    desc: "Creative direction for fashion shows, sports events, and corporate brand experiences — 50,000+ attendees across 12 large-scale productions.",
    impact: "Award-winning productions across three consecutive years",
    tag: "Direction",
  },
];

const LEADERSHIP_ITEMS = [
  { number: "01", title: "Team Leadership", desc: "Directed teams of 20+ creative professionals across branding, packaging, and digital disciplines." },
  { number: "02", title: "Creative Operations", desc: "Built scalable workflows for high-volume packaging and campaign output without quality compromise." },
  { number: "03", title: "Mentoring Designers", desc: "Developed junior and mid-level designers through structured critique, coaching, and career development." },
  { number: "04", title: "Stakeholder Management", desc: "Trusted partner for C-suite, marketing heads, and external clients in defining creative vision." },
  { number: "05", title: "Vendor Management", desc: "Managed print, production, and digital vendor ecosystems across domestic and export markets." },
  { number: "06", title: "Cross-functional Collaboration", desc: "Bridged design, marketing, sales, and supply chain to deliver integrated brand solutions." },
];

const RESEARCH_TOPICS = [
  { label: "Design Thinking", excerpt: "How design-led problem solving transforms consumer brands from the inside out." },
  { label: "Consumer Behaviour", excerpt: "The psychology behind purchase decisions and how packaging communicates trust." },
  { label: "Packaging Innovation", excerpt: "Sustainable structures, print technologies, and the future of shelf-ready packaging." },
  { label: "Brand Strategy", excerpt: "Positioning, naming, and visual identity systems that build durable brand equity." },
  { label: "User Experience", excerpt: "Applying UX principles to physical brand touchpoints — from pack to digital shelf." },
  { label: "Sustainability", excerpt: "Material science, lifecycle thinking, and responsible design in consumer packaging." },
];

export function Home() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}>
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "6rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: "1.5rem",
              }}
            >
              Design Director · Mumbai, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              Bhushan
              <br />
              <span style={{ color: "#F97316" }}>Vetal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.375rem)",
                fontWeight: 400,
                color: "#A1A1AA",
                marginBottom: "1.5rem",
                lineHeight: 1.4,
              }}
            >
              Design Director · Brand & Packaging Innovation Leader · Creative Strategist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.0625rem",
                color: "#A1A1AA",
                maxWidth: 580,
                lineHeight: 1.7,
                marginBottom: "3rem",
              }}
            >
              I help brands win attention, drive consumer preference, and create meaningful
              experiences through strategic branding, packaging innovation, creative leadership,
              and design thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <Link
                to="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#F97316",
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  padding: "0.875rem 2rem",
                  borderRadius: "0.125rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "background-color 0.2s",
                }}
              >
                View Portfolio <ArrowRight size={16} />
              </Link>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid #262626",
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  padding: "0.875rem 2rem",
                  borderRadius: "0.125rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "border-color 0.2s",
                }}
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#A1A1AA",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  padding: "0.875rem 1.5rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Contact Me <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── IMPACT METRICS ─── */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #262626", borderBottom: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0",
            }}
          >
            {METRICS.map((m, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                style={{
                  padding: "2rem 3rem",
                  borderRight: i < METRICS.length - 1 ? "1px solid #262626" : "none",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {m.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#A1A1AA",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} style={{ marginTop: "2rem", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "#F97316",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              FMCG · Retail · D2C · Export Markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div {...fadeUp}>
            <SectionLabel number="02" label="Areas of Expertise" />
          </motion.div>

          <motion.h2
            {...fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "4rem",
              maxWidth: 640,
            }}
          >
            Strategic Design Across Every Discipline
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1px",
              backgroundColor: "#262626",
              border: "1px solid #262626",
            }}
          >
            {EXPERTISE.map((item, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                style={{
                  backgroundColor: "#111111",
                  padding: "2.5rem",
                  cursor: "default",
                  transition: "background-color 0.3s",
                }}
                whileHover={{ backgroundColor: "#161616" }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#0A0A0A",
                    border: "1px solid #262626",
                    borderRadius: "0.125rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <item.icon size={22} color="#F97316" strokeWidth={1.5} />
                </div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#A1A1AA",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section style={{ padding: "7rem 2rem", borderTop: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div {...fadeUp}>
            <SectionLabel number="03" label="Featured Work" />
          </motion.div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <motion.h2
              {...fadeUp}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Selected Projects
            </motion.h2>
            <motion.div {...fadeUp}>
              <Link
                to="/portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#F97316",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                View All Work <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "1.5rem" }}>
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #262626",
                  borderRadius: "0.125rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                whileHover={{ borderColor: "#F97316" }}
              >
                <div
                  style={{
                    height: 240,
                    backgroundColor: "#0A0A0A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid #262626",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, #111111 0%, #0A0A0A 50%, rgba(249,115,22,0.04) 100%)`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "5rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.04)",
                      letterSpacing: "-0.05em",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {proj.number}
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      backgroundColor: "#F97316",
                      color: "#FFFFFF",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.75rem",
                    }}
                  >
                    {proj.tag}
                  </div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#F97316",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {proj.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "0.875rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {proj.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#A1A1AA",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {proj.desc}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid #262626",
                      paddingTop: "1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "#A1A1AA",
                        flex: 1,
                        paddingRight: "1rem",
                      }}
                    >
                      <span style={{ color: "#F97316" }}>↑ </span>
                      {proj.impact}
                    </p>
                    <Link
                      to="/portfolio"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        color: "#FFFFFF",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        flexShrink: 0,
                      }}
                    >
                      Case Study <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section style={{ padding: "7rem 2rem", borderTop: "1px solid #262626", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            <div>
              <motion.div {...fadeUp}>
                <SectionLabel number="04" label="About" />
              </motion.div>
              <motion.h2
                {...fadeUp}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                }}
              >
                A Multidisciplinary Design Leader
              </motion.h2>
              <motion.p
                {...fadeUp}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.0625rem",
                  color: "#A1A1AA",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                Bhushan Vetal is a multidisciplinary Design Director and Brand & Packaging Innovation
                Leader with 10+ years of experience across FMCG, CPG, Retail, D2C, branding,
                packaging design, creative direction, and digital experiences.
              </motion.p>
              <motion.div {...fadeUp}>
                <Link
                  to="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#F97316",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Full Biography <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <motion.div {...fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Deputy Manager – Design & Branding",
                "Creative Director",
                "Visiting Faculty",
                "MBA in Marketing",
                "UX/UI Design Professional",
                "Packaging & Branding Specialist",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.5rem",
                    backgroundColor: "#0A0A0A",
                    border: "1px solid #262626",
                    borderRadius: "0.125rem",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#F97316",
                      flexShrink: 0,
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#FFFFFF",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section style={{ padding: "7rem 2rem", borderTop: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div {...fadeUp}>
            <SectionLabel number="05" label="Leadership" />
          </motion.div>
          <motion.h2
            {...fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "4rem",
              maxWidth: 640,
            }}
          >
            Senior Creative Leadership
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem" }}>
            {LEADERSHIP_ITEMS.map((item, i) => (
              <motion.div key={i} {...stagger(i)} style={{ display: "flex", gap: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#F97316",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                    paddingTop: "0.125rem",
                  }}
                >
                  {item.number}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#A1A1AA",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESEARCH ─── */}
      <section style={{ padding: "7rem 2rem", borderTop: "1px solid #262626", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div {...fadeUp}>
            <SectionLabel number="06" label="Insights" />
          </motion.div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <motion.h2
              {...fadeUp}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Research & Perspectives
            </motion.h2>
            <motion.div {...fadeUp}>
              <Link
                to="/research"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#F97316",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                All Insights <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {RESEARCH_TOPICS.map((topic, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                style={{
                  padding: "2rem",
                  border: "1px solid #262626",
                  backgroundColor: "#0A0A0A",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                whileHover={{ borderColor: "#F97316" }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F97316",
                    marginBottom: "1rem",
                  }}
                >
                  Insight
                </p>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {topic.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#A1A1AA",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {topic.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Read More <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section style={{ padding: "8rem 2rem", borderTop: "1px solid #262626" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F97316",
              marginBottom: "1.5rem",
            }}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            {...fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
            }}
          >
            Let's Build Something
            <br />
            <span style={{ color: "#F97316" }}>Meaningful</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "#A1A1AA",
              maxWidth: 560,
              margin: "0 auto 3rem",
              lineHeight: 1.7,
            }}
          >
            Open to senior design leadership roles, consultancy engagements, and strategic
            brand partnerships at FMCG companies and global creative organisations.
          </motion.p>
          <motion.div
            {...fadeUp}
            style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#F97316",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                padding: "1rem 2.5rem",
                borderRadius: "0.125rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:bhushan@example.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid #262626",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                padding: "1rem 2.5rem",
                borderRadius: "0.125rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <Mail size={16} /> Email Directly
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
