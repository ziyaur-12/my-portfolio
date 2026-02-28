import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Twitter, Github, Instagram, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"]
const ACCENT_COLOR = "#6366F1"
const PINK = "#EC4899"

function SocialBtn({ icon: Icon, href = "#", hoverColor, size = 40, iconSize = 18 }) {
  const { theme } = useTheme()
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: size, height: size,
        border: `1.5px solid ${theme.socialBtnBorder}`, borderRadius: 10,
        background: "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", flexShrink: 0,
        color: theme.socialBtnColor, textDecoration: "none",
      }}
      whileHover={{
        backgroundColor: hoverColor || ACCENT_COLOR,
        borderColor: hoverColor || ACCENT_COLOR,
        scale: 1.12,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        whileHover={{ color: "#fff" }}
      >
        <Icon size={iconSize} />
      </motion.span>
    </motion.a>
  )
}

function NavLink({ label, onClick }) {
  const { theme } = useTheme()
  const active = label === "Home"
  return (
    <motion.a
      href={`#${label.toLowerCase()}`}
      onClick={onClick}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 14, fontWeight: 600,
        color: active ? ACCENT_COLOR : theme.navLink,
        textDecoration: "none", whiteSpace: "nowrap",
        position: "relative",
        padding: "4px 0",
      }}
      whileHover={{ color: ACCENT_COLOR, transition: { duration: 0.2 } }}
    >
      {label}
      {active && (
        <motion.div
          layoutId="nav-indicator"
          style={{
            position: "absolute", bottom: -2, left: 0, right: 0,
            height: 3, borderRadius: 2,
            background: `linear-gradient(90deg, ${ACCENT_COLOR}, ${PINK})`,
          }}
        />
      )}
    </motion.a>
  )
}

function ThemeToggle({ size = 40 }) {
  const { isDark, toggleTheme, theme } = useTheme()
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.12, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: size, height: size,
        borderRadius: 10,
        border: `1.5px solid ${theme.socialBtnBorder}`,
        background: isDark
          ? "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.15))"
          : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", flexShrink: 0,
        color: isDark ? "#FBBF24" : "#6366F1",
        transition: "all 0.3s ease",
      }}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  )
}

export default function Navbar() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0,
          width: "100%", height: isMobile ? 64 : 80,
          background: theme.navBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${theme.navBorder}`,
          zIndex: 100, padding: isMobile ? "0 16px" : "0 60px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? 20 : 24, fontWeight: 800,
          letterSpacing: "-0.5px",
          background: "linear-gradient(135deg, #6366F1, #EC4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          flexShrink: 0,
        }}>
          Ziyaurrahman<span style={{
            background: "linear-gradient(135deg, #EC4899, #F59E0B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>.</span>
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map(l => <NavLink key={l} label={l} />)}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 10 }}>
          <ThemeToggle size={isMobile ? 36 : 40} />
          {!isMobile && (
            <>
              <SocialBtn icon={Twitter}   href="https://twitter.com/ZiyaurR67059204" hoverColor="#1DA1F2" />
              <SocialBtn icon={Instagram} href="https://instagram.com/ziyaur786rahman" hoverColor="#E4405F" />
              <SocialBtn icon={Github}    href="https://github.com/ziyaur-12" hoverColor="#333" />
            </>
          )}
          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 36, height: 36, borderRadius: 10,
                border: `1.5px solid ${theme.socialBtnBorder}`,
                background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: theme.navLink,
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed", top: 64, left: 0,
              width: "100%", zIndex: 99,
              background: theme.navBg,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: `1px solid ${theme.navBorder}`,
              padding: "20px 24px 24px",
              display: "flex", flexDirection: "column", gap: 20,
            }}
          >
            {navLinks.map(l => (
              <NavLink key={l} label={l} onClick={() => setMenuOpen(false)} />
            ))}
            <div style={{ display: "flex", gap: 10, paddingTop: 8 }}>
              <SocialBtn icon={Twitter}   href="https://twitter.com/ZiyaurR67059204" hoverColor="#1DA1F2" size={36} iconSize={16} />
              <SocialBtn icon={Instagram} href="https://instagram.com/ziyaur786rahman" hoverColor="#E4405F" size={36} iconSize={16} />
              <SocialBtn icon={Github}    href="https://github.com/ziyaur-12" hoverColor="#333" size={36} iconSize={16} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}