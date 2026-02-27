import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'

const ACCENT = "#6366F1"
const GITHUB_USERNAME = "ziyaur-12"

function ProjectCard({ repo, delay }) {
  const langColors = {
    JavaScript: "#F7DF1E", Python: "#3776AB", Java: "#B07219",
    "C++": "#F34B7D", C: "#555555", HTML: "#E34C26",
    CSS: "#563D7C", TypeScript: "#3178C6",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(99,102,241,0.15)" }}
      style={{
        background: "#fff", borderRadius: 16, padding: "28px 24px",
        border: "1px solid #E5E5E5", display: "flex", flexDirection: "column",
        gap: 14, cursor: "default", transition: "box-shadow 0.3s",
        minHeight: 220,
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "rgba(99,102,241,0.08)", display: "flex",
          alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <Github size={22} color={ACCENT} />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {repo.stargazers_count > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#888" }}>
              <Star size={14} /> {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#888" }}>
              <GitFork size={14} /> {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 style={{
        fontSize: 17, fontWeight: 700, color: "#000",
        fontFamily: "'Inter',sans-serif",
      }}>
        {repo.name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 14, lineHeight: 1.6, color: "#666",
        fontFamily: "'Inter',sans-serif", flex: 1,
      }}>
        {repo.description || "A project built with passion and code."}
      </p>

      {/* Language + Links */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
        {repo.language && (
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{
              width: 10, height: 10, borderRadius: "50%",
              background: langColors[repo.language] || "#888",
            }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "#666", fontFamily: "'Inter',sans-serif" }}>
              {repo.language}
            </span>
          </div>
        )}
        <div style={{ display: "flex", gap: 10 }}>
          <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: ACCENT }}
            style={{ color: "#888", display: "flex", alignItems: "center" }}
          >
            <Github size={18} />
          </motion.a>
          {repo.homepage && (
            <motion.a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: ACCENT }}
              style={{ color: "#888", display: "flex", alignItems: "center" }}
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => {
        // Filter out forks and non-project repos, show repos with most stars first
        const excluded = ['dsa', 'ziyaur-12']
        const filtered = data
          .filter(r => !r.fork && !excluded.includes(r.name.toLowerCase()))
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
        setRepos(filtered)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" style={{
      width: "100%", padding: "100px 60px", background: "#fff",
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
        MY PROJECTS
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
        Things I've <span style={{ color: ACCENT }}>built</span>
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
        All projects are fetched directly from my GitHub. Click on any project
        to see the source code or live demo.
      </motion.p>

      {/* Loading */}
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: 40, height: 40, border: `3px solid #E5E5E5`,
            borderTopColor: ACCENT, borderRadius: "50%",
          }}
        />
      )}

      {/* Error */}
      {error && (
        <p style={{ color: "#EF4444", fontSize: 15, fontFamily: "'Inter',sans-serif" }}>
          Could not load projects. Please try again later.
        </p>
      )}

      {/* Project Grid */}
      {!loading && !error && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 28, width: "100%", maxWidth: 1000,
        }}>
          {repos.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} delay={i * 0.08} />
          ))}
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <p style={{ fontSize: 15, color: "#888", fontFamily: "'Inter',sans-serif" }}>
          No projects found.
        </p>
      )}

      {/* View All on GitHub */}
      {!loading && !error && repos.length > 0 && (
        <motion.a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(99,102,241,0.25)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginTop: 48, display: "inline-flex", alignItems: "center", gap: 8,
            background: ACCENT, color: "#fff", borderRadius: 12,
            padding: "14px 28px", fontSize: 15, fontWeight: 600,
            fontFamily: "'Inter',sans-serif", textDecoration: "none",
            border: `2px solid ${ACCENT}`,
          }}
        >
          <Github size={18} /> View All on GitHub
        </motion.a>
      )}
    </section>
  )
}
