import { motion } from 'framer-motion'
import { Github, Twitter, Instagram, Heart } from 'lucide-react'

const ACCENT = "#6366F1"

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/ZiyaurR67059204", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/ziyaur786rahman", label: "Instagram" },
  { icon: Github, href: "https://github.com/ziyaur-12", label: "GitHub" },
]

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"]

export default function Footer() {
  return (
    <footer style={{
      width: "100%", padding: "48px 60px 32px",
      background: "#0F0F0F", color: "#fff",
    }}>
      <div style={{
        maxWidth: 1000, margin: "0 auto",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 28,
      }}>
        {/* Logo */}
        <div style={{
          fontSize: 24, fontWeight: 700, fontFamily: "'Inter',sans-serif",
          letterSpacing: "-0.5px",
        }}>
          Ziyaurrahman<span style={{ color: ACCENT }}>.</span>
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {navLinks.map(link => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ color: ACCENT }}
              style={{
                color: "#999", textDecoration: "none",
                fontSize: 14, fontWeight: 500,
                fontFamily: "'Inter',sans-serif",
                transition: "color 0.2s",
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: 16 }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: ACCENT }}
              style={{
                width: 40, height: 40, borderRadius: 10,
                border: "1.5px solid #333", display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "#888", textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "#222" }} />

        {/* Copyright */}
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 13, color: "#666", fontFamily: "'Inter',sans-serif",
        }}>
          Made with <Heart size={14} color="#EF4444" fill="#EF4444" /> by Ziyaurrahman
          &nbsp;•&nbsp; © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
