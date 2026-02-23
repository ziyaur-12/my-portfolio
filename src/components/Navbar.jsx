import { motion } from 'framer-motion'
import { Twitter, Github, Instagram } from 'lucide-react'

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"]
const ACCENT_COLOR = "#6366F1"

function SocialBtn({ icon: Icon, href = "#" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 44, height: 44,
        border: "2px solid #000", borderRadius: 8,
        background: "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", flexShrink: 0,
        color: "#000", textDecoration: "none",
      }}
      whileHover={{ backgroundColor: "#000", scale: 1.08, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#000" }}
        whileHover={{ color: "#fff" }}
      >
        <Icon size={20} />
      </motion.span>
    </motion.a>
  )
}

function NavLink({ label }) {
  const active = label === "Home"
  return (
    <motion.a
      href={`#${label.toLowerCase()}`}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 15, fontWeight: 500,
        color: active ? ACCENT_COLOR : "#000",
        textDecoration: "none", whiteSpace: "nowrap",
      }}
      whileHover={{ color: ACCENT_COLOR, transition: { duration: 0.2 } }}
    >
      {label}
    </motion.a>
  )
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: 80,
        background: "#fff", borderBottom: "1px solid #E5E5E5",
        zIndex: 100, padding: "0 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 24, fontWeight: 700,
        color: "#000", letterSpacing: "-0.5px",
      }}>
        Ziyaurrahman<span style={{ color: ACCENT_COLOR }}>.</span>
      </div>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {navLinks.map(l => <NavLink key={l} label={l} />)}
      </div>

      {/* Social Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <SocialBtn icon={Twitter}   href="https://twitter.com/ZiyaurR67059204" />
        <SocialBtn icon={Instagram} href="https://instagram.com/ziyaur786rahman" />
        <SocialBtn icon={Github}    href="https://github.com/ziyaur-12" />
      </div>
    </motion.nav>
  )
}