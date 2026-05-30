import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/leadership", label: "Leadership" },
  { to: "/research", label: "Research" },
  { to: "/resume", label: "Resume" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #262626" : "none",
          transition: "all 0.3s ease",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#FFFFFF",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            BV
          </Link>

          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2.5rem" }}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                style={({ isActive }) => ({
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: isActive ? "#F97316" : "#A1A1AA",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  transition: "color 0.2s",
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              style={{
                backgroundColor: "#F97316",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0.625rem 1.5rem",
                borderRadius: "0.125rem",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#ea6c0a")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#F97316")}
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              backgroundColor: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem 2rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#FFFFFF",
              }}>BV</span>
              <button
                onClick={() => setMenuOpen(false)}
                style={{ background: "none", border: "none", color: "#FFFFFF", cursor: "pointer" }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.75rem", paddingLeft: "0.5rem" }}>
              {[...NAV_LINKS, { to: "/contact", label: "Contact" }].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    end={"end" in link ? link.end : undefined}
                    onClick={() => setMenuOpen(false)}
                    style={({ isActive }) => ({
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.75rem",
                      fontWeight: 700,
                      color: isActive ? "#F97316" : "#FFFFFF",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1.1,
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div style={{ paddingBottom: "2rem" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#A1A1AA" }}>
                Design Director & Brand Innovation Leader
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
