import { motion } from 'framer-motion'
import { FileText, Download, Eye, Briefcase, GraduationCap, Award } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"

const experience = [
  {
    period: "2024 – Present",
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    desc: "Building modern web applications using React, Node.js, Express, and MongoDB. Focused on clean UI/UX and scalable backend architecture.",
  },
  {
    period: "2023 – 2024",
    role: "Frontend Developer Intern",
    company: "Self-Initiated Projects",
    desc: "Developed responsive web interfaces, practiced component-based architecture with React, and implemented REST API integrations.",
  },
]

const education = [
  {
    period: "2021 – 2025",
    degree: "B.Tech in Computer Science",
    institute: "University",
    desc: "Core subjects: DSA, DBMS, OS, Computer Networks. Active in coding contests and open-source contributions.",
  },
]

function TimelineItem({ period, title, subtitle, desc, delay, icon: Icon }) {
  const { theme } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      style={{
        display: "flex", gap: 20, position: "relative",
        paddingBottom: 32,
      }}
    >
      {/* Timeline dot */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(236,72,153,0.1))",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "2px solid rgba(99,102,241,0.2)",
        boxShadow: "0 4px 12px rgba(99,102,241,0.1)",
      }}>
        <Icon size={20} color={ACCENT} />
      </div>

      <div style={{ flex: 1 }}>
        <span style={{
          fontSize: 12, fontWeight: 600, color: ACCENT,
          fontFamily: "'Inter',sans-serif", letterSpacing: 0.5,
          background: theme.tagBg, borderRadius: 12,
          padding: "3px 10px",
        }}>
          {period}
        </span>
        <h4 style={{
          fontSize: 17, fontWeight: 700, color: theme.heading,
          fontFamily: "'Inter',sans-serif", marginTop: 8, marginBottom: 2,
          transition: "color 0.3s",
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: 14, color: theme.textLight, fontFamily: "'Inter',sans-serif",
          marginBottom: 6, transition: "color 0.3s",
        }}>
          {subtitle}
        </p>
        <p style={{
          fontSize: 14, lineHeight: 1.7, color: theme.textSecondary,
          fontFamily: "'Inter',sans-serif", transition: "color 0.3s",
        }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function ResumeSection() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  return (
    <section id="resume" style={{
      width: "100%", padding: isMobile ? "60px 16px" : "100px 60px",
      background: theme.sectionBgGradient5,
      display: "flex", flexDirection: "column", alignItems: "center",
      position: "relative", overflow: "hidden",
      transition: "background 0.4s ease",
    }}>
      {/* Background decorations */}
      <div style={{
        position: "absolute", top: "15%", right: "-5%", width: 350, height: 350,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%", width: 300, height: 300,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.06), transparent)",
        pointerEvents: "none",
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
        RESUME
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800,
          color: theme.heading, textAlign: "center", marginBottom: 12,
          fontFamily: "'Inter',sans-serif", letterSpacing: "-0.5px",
          transition: "color 0.3s",
        }}
      >
        My <span style={{
          background: "linear-gradient(135deg, #6366F1, #EC4899)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Experience</span> & Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: 16, lineHeight: 1.7, color: theme.textMuted,
          textAlign: "center", maxWidth: 580, marginBottom: 40,
          fontFamily: "'Inter',sans-serif", transition: "color 0.3s",
        }}
      >
        A snapshot of my professional journey, education, and the skills I've built along the way.
      </motion.p>

      {/* Download / View Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ display: "flex", gap: 16, marginBottom: 56, flexWrap: "wrap", justifyContent: "center" }}
      >
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(99,102,241,0.35)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
            color: "#fff", border: "none",
            borderRadius: 12, padding: "14px 28px",
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            fontFamily: "'Inter',sans-serif", textDecoration: "none",
            boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
          }}
        >
          <Download size={18} /> Download Resume
        </motion.a>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, backgroundColor: "rgba(99,102,241,0.06)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "transparent", color: ACCENT,
            border: `2px solid ${ACCENT}`, borderRadius: 12,
            padding: "14px 28px", fontSize: 15, fontWeight: 600,
            cursor: "pointer", fontFamily: "'Inter',sans-serif",
            textDecoration: "none",
          }}
        >
          <Eye size={18} /> View Resume
        </motion.a>
      </motion.div>

      {/* Timeline Grid */}
      <div style={{
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
        gap: 48, width: "100%", maxWidth: 960,
      }}>
        {/* Experience Column */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              marginBottom: 28,
            }}
          >
            <Briefcase size={22} color={ACCENT} />
            <h3 style={{
              fontSize: 20, fontWeight: 700, color: theme.heading,
              fontFamily: "'Inter',sans-serif", transition: "color 0.3s",
            }}>
              Experience
            </h3>
          </motion.div>
          {experience.map((item, i) => (
            <TimelineItem
              key={i}
              period={item.period}
              title={item.role}
              subtitle={item.company}
              desc={item.desc}
              delay={i * 0.15}
              icon={Briefcase}
            />
          ))}
        </div>

        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              marginBottom: 28,
            }}
          >
            <GraduationCap size={22} color={ACCENT} />
            <h3 style={{
              fontSize: 20, fontWeight: 700, color: theme.heading,
              fontFamily: "'Inter',sans-serif", transition: "color 0.3s",
            }}>
              Education
            </h3>
          </motion.div>
          {education.map((item, i) => (
            <TimelineItem
              key={i}
              period={item.period}
              title={item.degree}
              subtitle={item.institute}
              desc={item.desc}
              delay={i * 0.15}
              icon={GraduationCap}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
