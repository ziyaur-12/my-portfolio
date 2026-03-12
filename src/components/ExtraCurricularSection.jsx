import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Award, Calendar, X, Trophy, PartyPopper, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"
const AMBER = "#F59E0B"

// =====================================================
// YAHAN APNI ACTIVITIES AUR CERTIFICATIONS ADD KARO
// Naye items SABSE UPAR add karo (recent first)
// Screenshots ko public/images/activities/ folder mein rakhein
// =====================================================

const activities = [
  {
    title: "Hack Arya Verse – 24 Hour Hackathon",
    organizer: "Arya College of Engineering & I.T.",
    date: "26–27 April 2025",
    description: "Participated in Hack Arya Verse, a 24-hour hackathon organized at Arya College of Engineering & IT in collaboration with Microsoft Azure and Reskill. The event focused on building innovative solutions and collaborating with developers in an intense coding environment.",
    image: "/images/activities/hack-arya-verse.jpg",
    tags: ["Hackathon", "Rapid Prototyping", "Collaboration", "Modern Tech"],
  },
  {
    title: "Shankara Global Hackathon – Innovation & Startup Competition",
    organizer: "Shankara Group of Institutions, Jaipur",
    date: "8–9 March 2025",
    description: "Participated in the 24-hour Shankara Global Hackathon, an innovation and startup competition where teams worked on solving real-world problems using technology. Collaborated with participants to brainstorm ideas, develop solutions, and present technical concepts within a limited time.",
    image: "/images/activities/shankara-hackathon.jpg",
    tags: ["Hackathon", "Problem Solving", "Innovation", "Startup Thinking"],
  },
  {
    title: "Zephyr 2024 – National Level Tech Fest",
    organizer: "Arya College of Engineering & I.T., Jaipur",
    date: "20 March 2024",
    achievement: "Second Position",
    description: "Participated in Zephyr 2024, a national level technical festival organized at Arya College of Engineering & IT. In the Track-O-Mania event, demonstrated strong problem-solving and technical skills, securing Second Position among participants.",
    image: "/images/activities/zephyr-2024.jpg",
    tags: ["Tech Fest", "Competition", "Problem Solving", "2nd Position"],
  },
  {
    title: "Scintillations 2024 – National Level Technical Fest",
    organizer: "Arya College of Engineering & I.T., Jaipur",
    date: "18 March 2024",
    achievement: "Second Position",
    description: "Participated in Scintillations 2024, a national level technical fest organized by the Department of Basic Science & Humanities. Took part in the Elementa event and secured Second Position, demonstrating creativity and analytical thinking.",
    image: "/images/activities/scintillations-2024.jpg",
    tags: ["Tech Fest", "Scientific Creativity", "Analytical Thinking", "2nd Position"],
  },
]

const certifications = [
  {
    title: "Cisco AICTE Virtual Internship Program 2025",
    issuer: "Cisco Networking Academy + AICTE",
    date: "June 2025 – August 2025",
    description: "Completed the Cisco AICTE Virtual Internship Program focused on networking fundamentals and modern networking technologies. Learned core networking concepts, communication protocols, and practical networking skills required for real-world IT infrastructure.",
    image: "/images/certifications/cisco-cert.png",
    skills: ["Networking Fundamentals", "Network Protocols", "IT Infrastructure", "Cisco Networking"],
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "Tata Consultancy Services (TCS)",
    date: "September 2025",
    description: "Completed the TCS iON Career Edge Young Professional program focused on professional skills required for the IT industry. Covered communication skills, interview preparation, business etiquette, and essential IT foundational knowledge.",
    image: "/images/certifications/tcs-cert.png",
    skills: ["Communication Skills", "Resume Writing", "Interview Prep", "Business Etiquette", "IT Fundamentals"],
  },
  {
    title: "Salesforce Programming Architect Internship",
    issuer: "TechForce Academy Australia",
    date: "June 2025 – August 2025",
    description: "Successfully completed an internship focused on Salesforce programming and architecture concepts. Gained practical exposure to enterprise cloud technologies and modern application development practices.",
    image: "/images/certifications/salesforce-cert.png",
    skills: ["Salesforce Development", "Cloud Computing", "Enterprise Architecture", "CRM Systems"],
  },
]

function ImageModal({ image, title, onClose }) {
  const isMobile = useIsMobile()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.85)", zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: isMobile ? 16 : 40, cursor: "zoom-out",
      }}
    >
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute", top: 20, right: 20,
          width: 44, height: 44, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#fff", zIndex: 10000,
        }}
      >
        <X size={22} />
      </motion.button>
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        src={image}
        alt={title}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: "90%", maxHeight: "85vh",
          borderRadius: 12, objectFit: "contain",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          cursor: "default",
        }}
      />
    </motion.div>
  )
}

function ActivityCard({ item, delay }) {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(99,102,241,0.15)" }}
        style={{
          background: theme.cardBg,
          borderRadius: 20,
          border: `1px solid ${theme.cardBorder}`,
          overflow: "hidden",
          cursor: "default",
          transition: "box-shadow 0.3s, background 0.3s, border-color 0.3s",
        }}
      >
        {/* Image */}
        <div
          onClick={() => setModalOpen(true)}
          style={{
            width: "100%", height: isMobile ? 180 : 220,
            overflow: "hidden", cursor: "zoom-in",
            position: "relative",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s",
            }}
            onError={e => {
              e.target.style.display = "none"
              e.target.nextSibling.style.display = "flex"
            }}
          />
          <div style={{
            display: "none", width: "100%", height: "100%",
            background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(236,72,153,0.1))",
            alignItems: "center", justifyContent: "center",
            position: "absolute", top: 0, left: 0,
            color: theme.textMuted, fontSize: 14,
            fontFamily: "'Inter',sans-serif",
          }}>
            Screenshot yahan add karein
          </div>
          {/* Overlay gradient */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 60,
            background: "linear-gradient(transparent, rgba(0,0,0,0.3))",
            pointerEvents: "none",
          }} />
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
            <Calendar size={14} color={ACCENT} />
            <span style={{
              fontSize: 12, fontWeight: 600, color: ACCENT,
              fontFamily: "'Inter',sans-serif",
              background: "rgba(99,102,241,0.08)",
              padding: "3px 10px", borderRadius: 20,
            }}>
              {item.date}
            </span>
            {item.achievement && (
              <span style={{
                fontSize: 11, fontWeight: 700, color: AMBER,
                fontFamily: "'Inter',sans-serif",
                background: "rgba(245,158,11,0.10)",
                padding: "3px 10px", borderRadius: 20,
                display: "flex", alignItems: "center", gap: 4,
              }}>
                <Trophy size={12} /> {item.achievement}
              </span>
            )}
          </div>

          <h3 style={{
            fontSize: 16, fontWeight: 700, color: theme.heading,
            fontFamily: "'Inter',sans-serif", marginBottom: 4,
            lineHeight: 1.4, transition: "color 0.3s",
          }}>
            {item.title}
          </h3>

          {item.organizer && (
            <p style={{
              fontSize: 12, fontWeight: 600, color: CYAN,
              fontFamily: "'Inter',sans-serif", marginBottom: 8,
            }}>
              {item.organizer}
            </p>
          )}

          <p style={{
            fontSize: 13, lineHeight: 1.6, color: theme.textMuted,
            fontFamily: "'Inter',sans-serif", marginBottom: 12,
            transition: "color 0.3s",
          }}>
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {item.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 600, color: PINK,
                  background: "rgba(236,72,153,0.08)",
                  padding: "3px 10px", borderRadius: 20,
                  fontFamily: "'Inter',sans-serif",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ImageModal image={item.image} title={item.title} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

function CertificationCard({ item, delay }) {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(6,182,212,0.15)" }}
        style={{
          background: theme.cardBg,
          borderRadius: 20,
          border: `1px solid ${theme.cardBorder}`,
          overflow: "hidden",
          cursor: "default",
          transition: "box-shadow 0.3s, background 0.3s, border-color 0.3s",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 3, background: "linear-gradient(90deg, #06B6D4, #6366F1, #EC4899)",
          zIndex: 1,
        }} />

        {/* Image */}
        <div
          onClick={() => setModalOpen(true)}
          style={{
            width: "100%", height: isMobile ? 180 : 200,
            overflow: "hidden", cursor: "zoom-in",
            position: "relative",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s",
            }}
            onError={e => {
              e.target.style.display = "none"
              e.target.nextSibling.style.display = "flex"
            }}
          />
          <div style={{
            display: "none", width: "100%", height: "100%",
            background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(99,102,241,0.1))",
            alignItems: "center", justifyContent: "center",
            position: "absolute", top: 0, left: 0,
            color: theme.textMuted, fontSize: 14,
            fontFamily: "'Inter',sans-serif",
          }}>
            Certificate screenshot yahan add karein
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Award size={16} color={CYAN} />
            <span style={{
              fontSize: 12, fontWeight: 600, color: CYAN,
              fontFamily: "'Inter',sans-serif",
            }}>
              {item.issuer}
            </span>
          </div>

          <h3 style={{
            fontSize: 16, fontWeight: 700, color: theme.heading,
            fontFamily: "'Inter',sans-serif", marginBottom: 6,
            lineHeight: 1.4, transition: "color 0.3s",
          }}>
            {item.title}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <Calendar size={12} color={theme.textLight} />
            <span style={{
              fontSize: 12, color: theme.textLight,
              fontFamily: "'Inter',sans-serif",
            }}>
              {item.date}
            </span>
          </div>

          <p style={{
            fontSize: 13, lineHeight: 1.6, color: theme.textMuted,
            fontFamily: "'Inter',sans-serif", transition: "color 0.3s",
            marginBottom: item.skills ? 12 : 0,
          }}>
            {item.description}
          </p>

          {/* Skills Tags */}
          {item.skills && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {item.skills.map(skill => (
                <span key={skill} style={{
                  fontSize: 11, fontWeight: 600, color: ACCENT,
                  background: "rgba(99,102,241,0.08)",
                  padding: "3px 10px", borderRadius: 20,
                  fontFamily: "'Inter',sans-serif",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ImageModal image={item.image} title={item.title} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function ExtraCurricularSection() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState("activities")
  const [showAllActivities, setShowAllActivities] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const INITIAL_COUNT = 3
  const visibleActivities = showAllActivities ? activities : activities.slice(0, INITIAL_COUNT)
  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, INITIAL_COUNT)

  const tabs = [
    { id: "activities", label: "Achievements & Hackathons", icon: Trophy, count: activities.length },
    { id: "certifications", label: "Certifications", icon: Award, count: certifications.length },
  ]

  return (
    <section id="activities" style={{
      padding: isMobile ? "60px 16px" : "100px 24px",
      background: theme.sectionBgGradient5,
      transition: "background 0.5s",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: isMobile ? 40 : 56 }}
        >
          <motion.span style={{
            fontSize: 13, fontWeight: 700, color: ACCENT,
            letterSpacing: 3, textTransform: "uppercase",
            fontFamily: "'Inter',sans-serif",
          }}>
            Beyond Academics
          </motion.span>

          <h2 style={{
            fontSize: isMobile ? 28 : 40, fontWeight: 800, marginTop: 10,
            fontFamily: "'Inter',sans-serif",
            background: "linear-gradient(135deg, #6366F1, #EC4899, #06B6D4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Achievements & Hackathons
          </h2>

          <p style={{
            fontSize: isMobile ? 14 : 16, color: theme.textMuted,
            fontFamily: "'Inter',sans-serif", marginTop: 12,
            maxWidth: 520, margin: "12px auto 0",
            lineHeight: 1.7, transition: "color 0.3s",
          }}>
            Hackathons, competitions, and certifications that shaped my journey.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex", justifyContent: "center", gap: 12,
            marginBottom: isMobile ? 32 : 48,
          }}
        >
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: isMobile ? "10px 18px" : "12px 24px",
                borderRadius: 14,
                border: activeTab === tab.id
                  ? "2px solid transparent"
                  : `1.5px solid ${theme.cardBorder}`,
                background: activeTab === tab.id
                  ? "linear-gradient(135deg, #6366F1, #EC4899)"
                  : theme.cardBg,
                color: activeTab === tab.id ? "#fff" : theme.textMuted,
                fontFamily: "'Inter',sans-serif",
                fontSize: isMobile ? 13 : 14, fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: activeTab === tab.id
                  ? "0 4px 20px rgba(99,102,241,0.3)"
                  : "none",
              }}
            >
              <tab.icon size={isMobile ? 16 : 18} />
              {tab.label}
              <span style={{
                fontSize: 11, fontWeight: 700,
                background: activeTab === tab.id
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(99,102,241,0.08)",
                color: activeTab === tab.id ? "#fff" : ACCENT,
                padding: "2px 8px", borderRadius: 10,
              }}>
                {tab.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "activities" && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
                gap: isMobile ? 20 : 28,
              }}
            >
              {visibleActivities.map((item, i) => (
                <ActivityCard key={item.title} item={item} delay={i * 0.1} />
              ))}
            </motion.div>
          )}

          {activeTab === "activities" && activities.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", justifyContent: "center", marginTop: 32 }}
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(99,102,241,0.18)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAllActivities(prev => !prev)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: theme.cardBg,
                  color: ACCENT, borderRadius: 14,
                  padding: "13px 28px", fontSize: 14, fontWeight: 600,
                  fontFamily: "'Inter',sans-serif", cursor: "pointer",
                  border: `1.5px solid ${ACCENT}`,
                  transition: "all 0.3s",
                }}
              >
                {showAllActivities ? (
                  <><ChevronUp size={18} /> Show Less</>
                ) : (
                  <><ChevronDown size={18} /> Show More ({activities.length - INITIAL_COUNT} more)</>
                )}
              </motion.button>
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
                gap: isMobile ? 20 : 28,
              }}
            >
              {visibleCerts.map((item, i) => (
                <CertificationCard key={item.title} item={item} delay={i * 0.1} />
              ))}
            </motion.div>
          )}

          {activeTab === "certifications" && certifications.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", justifyContent: "center", marginTop: 32 }}
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(99,102,241,0.18)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAllCerts(prev => !prev)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: theme.cardBg,
                  color: ACCENT, borderRadius: 14,
                  padding: "13px 28px", fontSize: 14, fontWeight: 600,
                  fontFamily: "'Inter',sans-serif", cursor: "pointer",
                  border: `1.5px solid ${ACCENT}`,
                  transition: "all 0.3s",
                }}
              >
                {showAllCerts ? (
                  <><ChevronUp size={18} /> Show Less</>
                ) : (
                  <><ChevronDown size={18} /> Show More ({certifications.length - INITIAL_COUNT} more)</>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
