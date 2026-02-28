import { motion } from 'framer-motion'
import { Code2, Server, Database, Cpu } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"
const AMBER = "#F59E0B"

const highlights = [
  { icon: Code2,    title: "Frontend",  desc: "React, HTML/CSS, Tailwind, responsive UIs", color: ACCENT, gradient: "linear-gradient(135deg, #6366F1, #818CF8)" },
  { icon: Server,   title: "Backend",   desc: "Node.js, Express, REST APIs, authentication", color: PINK, gradient: "linear-gradient(135deg, #EC4899, #F472B6)" },
  { icon: Database, title: "Database",  desc: "MongoDB, SQL, data modelling, CRUD", color: CYAN, gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)" },
  { icon: Cpu,      title: "DSA & Core",desc: "C, C++, Java, Python, algorithms, DBMS", color: AMBER, gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)" },
]

function HighlightCard({ icon: Icon, title, desc, delay, color, gradient }) {
  const { theme } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, boxShadow: `0 16px 40px ${color}25` }}
      style={{
        background: theme.cardBg, borderRadius: 20, padding: "32px 26px",
        border: `1px solid ${theme.cardBorder}`, display: "flex", flexDirection: "column",
        gap: 14, cursor: "default", transition: "box-shadow 0.3s, background 0.3s, border-color 0.3s",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Decorative gradient corner */}
      <div style={{
        position: "absolute", top: -30, right: -30, width: 100, height: 100,
        borderRadius: "50%", background: gradient, opacity: 0.08,
        pointerEvents: "none",
      }} />
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: gradient, display: "flex",
        alignItems: "center", justifyContent: "center",
        boxShadow: `0 4px 16px ${color}30`,
      }}>
        <Icon size={24} color="#fff" />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: theme.headingAlt, fontFamily: "'Inter',sans-serif", transition: "color 0.3s" }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: theme.textMuted, fontFamily: "'Inter',sans-serif", transition: "color 0.3s" }}>{desc}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  return (
    <section id="about" style={{
      width: "100%", padding: isMobile ? "60px 16px" : "100px 60px",
      background: theme.sectionBgGradient1,
      display: "flex", flexDirection: "column", alignItems: "center",
      position: "relative", overflow: "hidden",
      transition: "background 0.4s ease",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%", width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.06), transparent)",
        pointerEvents: "none", opacity: theme.decorOpacityMultiplier,
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-5%", width: 350, height: 350,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.06), transparent)",
        pointerEvents: "none", opacity: theme.decorOpacityMultiplier,
      }} />
      {/* Section Header */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          display: "inline-block", background: theme.tagBg,
          color: ACCENT, borderRadius: 20, padding: "6px 18px",
          fontSize: 13, fontWeight: 600, letterSpacing: 1,
          fontFamily: "'Inter',sans-serif", marginBottom: 16,
        }}
      >
        ABOUT ME
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800,
          color: theme.heading, textAlign: "center", marginBottom: 20,
          fontFamily: "'Inter',sans-serif", letterSpacing: "-0.5px",
          transition: "color 0.3s",
        }}
      >
        Passionate about building{" "}
        <span style={{
          background: "linear-gradient(135deg, #6366F1, #EC4899)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>real-world</span> products
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: 16, lineHeight: 1.8, color: theme.textSecondary, maxWidth: 650,
          textAlign: "center", marginBottom: 56, fontFamily: "'Inter',sans-serif",
          transition: "color 0.3s",
        }}
      >
        I'm <strong>Ziyaurrahman</strong>, an engineering student from <strong>Jaipur, Rajasthan</strong>.
        I love turning ideas into clean, functional web applications — from pixel-perfect
        frontends to reliable backend systems. I'm always learning and building new things
        to sharpen my full-stack skills.
      </motion.p>

      {/* Highlight Cards */}
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 24, width: "100%", maxWidth: 1000,
      }}>
        {highlights.map((h, i) => (
          <HighlightCard key={h.title} {...h} delay={0.15 * i} />
        ))}
      </div>
    </section>
  )
}
