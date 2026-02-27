import { motion } from 'framer-motion'

const ACCENT = "#6366F1"

const skillCategories = [
  {
    title: "Languages",
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
    skills: [
      { name: "React.js", level: 100 },
      { name: "HTML5", level: 100 },
      { name: "CSS3 / Tailwind", level: 100 },
      { name: "Framer Motion", level: 100 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 100 },
      { name: "Express.js", level: 100 },
      { name: "REST APIs", level: 100 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 100 },
      { name: "SQL / MySQL", level: 100 },
      { name: "Git / GitHub", level: 100 },
      { name: "DBMS Concepts", level: 100 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
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
        <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{name}</span>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#999" }}>{level}%</span>
      </div>
      <div style={{
        width: "100%", height: 8, borderRadius: 4,
        background: "#F0F0F0", overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%", borderRadius: 4,
            background: `linear-gradient(90deg, ${ACCENT}, #818CF8)`,
          }}
        />
      </div>
    </motion.div>
  )
}

function CategoryCard({ title, skills, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: "#fff", borderRadius: 16, padding: "28px 28px 20px",
        border: "1px solid #E5E5E5",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      <h3 style={{
        fontSize: 18, fontWeight: 700, color: ACCENT,
        fontFamily: "'Inter',sans-serif", marginBottom: 20,
        paddingBottom: 12, borderBottom: "2px solid #F0F0F0",
      }}>
        {title}
      </h3>
      {skills.map((s, i) => (
        <SkillBar key={s.name} {...s} delay={delay + i * 0.08} />
      ))}
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" style={{
      width: "100%", padding: "100px 60px",
      background: "linear-gradient(180deg, #FAFAFF 0%, #F5F3FF 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          display: "inline-block", background: "rgba(99,102,241,0.08)",
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
          color: "#000", textAlign: "center", marginBottom: 16,
          fontFamily: "'Inter',sans-serif", letterSpacing: "-0.5px",
        }}
      >
        Technologies I <span style={{ color: ACCENT }}>work with</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: 15, color: "#666", textAlign: "center",
          maxWidth: 540, marginBottom: 56, fontFamily: "'Inter',sans-serif",
        }}
      >
        From low-level programming in C/C++ to modern full-stack development
        with React & Node.js — here's what I bring to the table.
      </motion.p>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 28, width: "100%", maxWidth: 1000,
      }}>
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.title} {...cat} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
