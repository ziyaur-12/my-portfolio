import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"
const AMBER = "#F59E0B"

const skillCategories = [
  {
    title: "Languages",
    color: ACCENT,
    gradient: "linear-gradient(90deg, #6366F1, #818CF8, #A78BFA)",
    skills: [
      { name: "C", level: 100 },
      { name: "C++", level: 100 },
      { name: "Java", level: 100 },
      { name: "Python", level: 100 },
      { name: "JavaScript", level: 100 },
    ],
  },
  {
    title: "Frontend",
    color: PINK,
    gradient: "linear-gradient(90deg, #EC4899, #F472B6, #F9A8D4)",
    skills: [
      { name: "React.js", level: 100 },
      { name: "HTML5", level: 100 },
      { name: "CSS3 / Tailwind", level: 100 },
      { name: "Framer Motion", level: 100 },
    ],
  },
  {
    title: "Backend",
    color: CYAN,
    gradient: "linear-gradient(90deg, #06B6D4, #22D3EE, #67E8F9)",
    skills: [
      { name: "Node.js", level: 100 },
      { name: "Express.js", level: 100 },
      { name: "REST APIs", level: 100 },
    ],
  },
  {
    title: "Database & Tools",
    color: AMBER,
    gradient: "linear-gradient(90deg, #F59E0B, #FBBF24, #FDE68A)",
    skills: [
      { name: "MongoDB", level: 100 },
      { name: "SQL / MySQL", level: 100 },
      { name: "Git / GitHub", level: 100 },
      { name: "DBMS Concepts", level: 100 },
    ],
  },
]

function SkillBar({ name, level, delay, gradient, color }) {
  const { theme } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      style={{ marginBottom: 18 }}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", marginBottom: 6,
        fontFamily: "'Inter',sans-serif",
      }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: theme.text, transition: "color 0.3s" }}>{name}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color }}>{level}%</span>
      </div>
      <div style={{
        width: "100%", height: 10, borderRadius: 5,
        background: theme.barBg, overflow: "hidden",
        transition: "background 0.3s",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%", borderRadius: 5,
            background: gradient,
            boxShadow: `0 2px 8px ${color}30`,
          }}
        />
      </div>
    </motion.div>
  )
}

function CategoryCard({ title, skills, delay, color, gradient }) {
  const { theme } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: `0 12px 32px ${color}20` }}
      style={{
        background: theme.cardBg, borderRadius: 20, padding: "28px 28px 20px",
        border: `1px solid ${theme.cardBorder}`,
        boxShadow: theme.cardShadow,
        position: "relative", overflow: "hidden",
        transition: "box-shadow 0.3s, transform 0.3s, background 0.3s, border-color 0.3s",
      }}
    >
      {/* Top gradient border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 4, background: gradient,
      }} />
      <h3 style={{
        fontSize: 18, fontWeight: 700, color,
        fontFamily: "'Inter',sans-serif", marginBottom: 20,
        paddingBottom: 12, borderBottom: `2px solid ${theme.divider}`,
        transition: "border-color 0.3s",
      }}>
        {title}
      </h3>
      {skills.map((s, i) => (
        <SkillBar key={s.name} {...s} delay={delay + i * 0.08} gradient={gradient} color={color} />
      ))}
    </motion.div>
  )
}

export default function SkillsSection() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  return (
    <section id="skills" style={{
      width: "100%", padding: isMobile ? "60px 16px" : "100px 60px",
      background: theme.sectionBgGradient2,
      display: "flex", flexDirection: "column", alignItems: "center",
      transition: "background 0.4s ease",
    }}>
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
        MY SKILLS
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800,
          color: theme.heading, textAlign: "center", marginBottom: 16,
          fontFamily: "'Inter',sans-serif", letterSpacing: "-0.5px",
          transition: "color 0.3s",
        }}
      >
        Technologies I{" "}
        <span style={{
          background: "linear-gradient(135deg, #6366F1, #EC4899)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>work with</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: 15, color: theme.textMuted, textAlign: "center",
          maxWidth: 540, marginBottom: 56, fontFamily: "'Inter',sans-serif",
          transition: "color 0.3s",
        }}
      >
        From low-level programming in C/C++ to modern full-stack development
        with React & Node.js — here's what I bring to the table.
      </motion.p>

      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 28, width: "100%", maxWidth: 1000,
      }}>
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.title} {...cat} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
