import { motion } from 'framer-motion'
import { Code2, Server, Database, Cpu } from 'lucide-react'

const ACCENT = "#6366F1"

const highlights = [
  { icon: Code2,    title: "Frontend",  desc: "React, HTML/CSS, Tailwind, responsive UIs" },
  { icon: Server,   title: "Backend",   desc: "Node.js, Express, REST APIs, authentication" },
  { icon: Database, title: "Database",  desc: "MongoDB, SQL, data modelling, CRUD" },
  { icon: Cpu,      title: "DSA & Core",desc: "C, C++, Java, Python, algorithms, DBMS" },
]

function HighlightCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(99,102,241,0.15)" }}
      style={{
        background: "#fff", borderRadius: 16, padding: "28px 24px",
        border: "1px solid #E5E5E5", display: "flex", flexDirection: "column",
        gap: 12, cursor: "default", transition: "box-shadow 0.3s",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: "rgba(99,102,241,0.08)", display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={24} color={ACCENT} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#000", fontFamily: "'Inter',sans-serif" }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#666", fontFamily: "'Inter',sans-serif" }}>{desc}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" style={{
      width: "100%", padding: "100px 60px", background: "#fff",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      {/* Section Header */}
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
        ABOUT ME
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800,
          color: "#000", textAlign: "center", marginBottom: 20,
          fontFamily: "'Inter',sans-serif", letterSpacing: "-0.5px",
        }}
      >
        Passionate about building{" "}
        <span style={{ color: ACCENT }}>real-world</span> products
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 650,
          textAlign: "center", marginBottom: 56, fontFamily: "'Inter',sans-serif",
        }}
      >
        I'm <strong>Ziyaurrahman</strong>, an engineering student from <strong>Jaipur, Rajasthan</strong>.
        I love turning ideas into clean, functional web applications — from pixel-perfect
        frontends to reliable backend systems. I'm always learning and building new things
        to sharpen my full-stack skills.
      </motion.p>

      {/* Highlight Cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 24, width: "100%", maxWidth: 1000,
      }}>
        {highlights.map((h, i) => (
          <HighlightCard key={h.title} {...h} delay={0.15 * i} />
        ))}
      </div>
    </section>
  )
}
