import { Link } from "react-router";
import { Mail, Linkedin, FileText, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid #262626",
        padding: "4rem 2rem 2.5rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "2rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "0.5rem",
              }}
            >
              Bhushan Vetal
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "#A1A1AA",
                marginBottom: "1.5rem",
              }}
            >
              Design Director & Brand Innovation Leader
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "#F97316",
                fontWeight: 500,
              }}
            >
              "Designing Brands. Building Experiences. Creating Impact."
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#A1A1AA",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/leadership", label: "Leadership" },
                { to: "/research", label: "Research" },
                { to: "/resume", label: "Resume" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F97316")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#FFFFFF")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#A1A1AA",
                marginBottom: "1.25rem",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Mail, label: "bhushan@example.com", href: "mailto:bhushan@example.com" },
                { icon: Linkedin, label: "linkedin.com/in/bhushanvetal", href: "#" },
                { icon: FileText, label: "Download Resume", href: "#" },
                { icon: ExternalLink, label: "Portfolio", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#A1A1AA",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#F97316";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#A1A1AA";
                  }}
                >
                  <item.icon size={16} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #262626",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#A1A1AA",
            }}
          >
            © 2026 Bhushan Vetal. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#A1A1AA",
            }}
          >
            Design Director & Brand Innovation Leader
          </p>
        </div>
      </div>
    </footer>
  );
}
