import { motion } from 'framer-motion'
import { Github, Twitter, Instagram, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/ZiyaurR67059204", label: "Twitter", color: "#1DA1F2" },
  { icon: Instagram, href: "https://instagram.com/ziyaur786rahman", label: "Instagram", color: "#E4405F" },
  { icon: Github, href: "https://github.com/ziyaur-12", label: "GitHub", color: "#fff" },
]

const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"]

export default function Footer() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  return (
    <footer style={{
      width: "100%", padding: isMobile ? "32px 16px 24px" : "48px 60px 32px",
      background: theme.footerBg,
      color: "#fff", position: "relative",
      transition: "background 0.4s ease",
    }}>
      {/* Top gradient line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3, background: "linear-gradient(90deg, #6366F1, #EC4899, #06B6D4, #F59E0B)",
      }} />
      <div style={{
        maxWidth: 1000, margin: "0 auto",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 28,
      }}>
        {/* Logo */}
        <div style={{
          fontSize: 24, fontWeight: 800, fontFamily: "'Inter',sans-serif",
          letterSpacing: "-0.5px",
          background: "linear-gradient(135deg, #6366F1, #EC4899)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Ziyaurrahman<span style={{
            background: "linear-gradient(135deg, #EC4899, #F59E0B)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>.</span>
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {navLinks.map(link => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ color: ACCENT }}
              style={{
                color: theme.footerText, textDecoration: "none",
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
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, borderColor: color, color: color }}
              style={{
                width: 42, height: 42, borderRadius: 12,
                border: `1.5px solid ${theme.footerBorder}`, display: "flex",
                alignItems: "center", justifyContent: "center",
                color: theme.footerText, textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: `linear-gradient(90deg, transparent, ${theme.footerBorder}, transparent)` }} />

        {/* Copyright */}
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 13, color: theme.footerCopyright, fontFamily: "'Inter',sans-serif",
        }}>
          Made with <Heart size={14} color="#EF4444" fill="#EF4444" /> by Ziyaurrahman
          &nbsp;•&nbsp; © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
