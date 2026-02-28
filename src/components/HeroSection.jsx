import { motion } from 'framer-motion'
import myPhoto from '../assets/photo.jpg'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile, useIsTablet } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"
const AMBER = "#F59E0B"

function FloatingOrb({ color, size, top, left, delay }) {
  const { theme } = useTheme()
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute", top, left,
        width: size, height: size, borderRadius: "50%",
        background: `radial-gradient(circle, ${color}40, ${color}10)`,
        filter: `blur(${size / 4}px)`,
        pointerEvents: "none", zIndex: 0,
        opacity: theme.orbOpacity,
      }}
    />
  )
}

function CircularText() {
  const { theme } = useTheme()
  const cx = 70, cy = 70, r = 52
  return (
    <svg width="100%" height="100%" viewBox="0 0 140 140" style={{ position:"absolute", inset:0 }}>
      <defs>
        <path id="badgeCirclePath" d={`M ${cx},${cy - r} a ${r},${r} 0 1,1 -0.001,0`} />
      </defs>
      <text style={{ fontFamily:"'Inter',sans-serif", fontSize:9.5, fontWeight:700, fill: theme.circularTextFill, letterSpacing:"2px" }}>
        <textPath href="#badgeCirclePath" startOffset="50%" textAnchor="middle">
          OPEN TO WORK ★ FULL STACK DEV ★
        </textPath>
      </text>
    </svg>
  )
}

function Sparkle({ size, delayOffset = 0, color = ACCENT }) {
  const cx = size / 2, r1 = size * 0.46, r2 = size * 0.18
  const pts = [0, 90, 180, 270].map(deg => {
    const rad = (deg * Math.PI) / 180
    const midRad = ((deg + 45) * Math.PI) / 180
    return { tip: { x: cx + Math.cos(rad)*r1, y: cx + Math.sin(rad)*r1 }, mid: { x: cx + Math.cos(midRad)*r2, y: cx + Math.sin(midRad)*r2 } }
  })
  const d = pts.map(({ tip, mid }, i) => `${i===0?"M":"L"}${tip.x.toFixed(2)},${tip.y.toFixed(2)} L${mid.x.toFixed(2)},${mid.y.toFixed(2)}`).join(" ") + " Z"
  return (
    <motion.svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none"
      style={{ display:"block", originX:"50%", originY:"50%" }}
      animate={{ rotate:360 }} transition={{ duration:20, ease:"linear", repeat:Infinity, delay:delayOffset }}>
      <circle cx={cx} cy={cx} r={cx-1} stroke={color} strokeWidth="1" opacity="0.15" fill="none"/>
      <path d={d} stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
      <circle cx={cx} cy={cx} r="2" fill={color}/>
    </motion.svg>
  )
}

function WavyLines() {
  const colors = [ACCENT, PINK, CYAN]
  return (
    <motion.div style={{ display:"flex", flexDirection:"column", gap:8 }}
      animate={{ x:[0, 5, -3, 0] }} transition={{ duration:3, ease:"easeInOut", repeat:Infinity, times:[0,0.33,0.66,1] }}>
      {colors.map((color, i) => (
        <svg key={i} width="100" height="12" viewBox="0 0 100 12" fill="none">
          <path d="M0 6 C8 1,17 11,25 6 C33 1,42 11,50 6 C58 1,67 11,75 6 C83 1,92 11,100 6"
            stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
        </svg>
      ))}
    </motion.div>
  )
}

function HandDrawnUnderline() {
  return (
    <>
      <style>{`
        @keyframes drawUnderline { from{stroke-dashoffset:360} to{stroke-dashoffset:0} }
        .ul-p{stroke-dasharray:360;stroke-dashoffset:360;animation:drawUnderline 2s ease forwards;animation-delay:.6s}
        .ul-s{stroke-dasharray:360;stroke-dashoffset:360;animation:drawUnderline 2s ease forwards;animation-delay:.9s}
      `}</style>
      <svg viewBox="0 0 340 14" fill="none" preserveAspectRatio="none"
        style={{ position:"absolute", bottom:-10, left:0, width:"100%", height:12, overflow:"visible" }}>
        <defs>
          <linearGradient id="underline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ACCENT} />
            <stop offset="50%" stopColor={PINK} />
            <stop offset="100%" stopColor={CYAN} />
          </linearGradient>
        </defs>
        <path className="ul-p" d="M2 9 C25 3,48 12,72 7 C96 2,119 12,143 7 C167 2,190 11,214 6 C238 1,261 10,285 6 C309 2,325 9,338 7"
          stroke="url(#underline-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path className="ul-s" d="M2 11 C30 7,55 13,85 9 C115 5,140 12,168 9 C196 6,222 12,250 8 C278 4,308 11,338 9"
          stroke={PINK} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35"/>
      </svg>
    </>
  )
}

function SkillTag({ label, color }) {
  return (
    <motion.span whileHover={{ scale:1.08, backgroundColor: color, color:"#fff", borderColor: color }}
      transition={{ duration:0.2 }}
      style={{ display:"inline-block", padding:"5px 14px", borderRadius:20,
        border:`1.5px solid ${color}`, color: color, fontSize:12, fontWeight:600,
        fontFamily:"'Inter',sans-serif", cursor:"default", background:`${color}10` }}>
      {label}
    </motion.span>
  )
}

export default function HeroSection() {
  const { theme, isDark } = useTheme()
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  const skills = [
    { label: "C", color: isDark ? "#999" : "#555" },
    { label: "C++", color: "#F34B7D" },
    { label: "Java", color: "#B07219" },
    { label: "Python", color: "#3776AB" },
    { label: "React", color: "#61DAFB" },
    { label: "Node.js", color: "#68A063" },
    { label: "MongoDB", color: "#47A248" },
    { label: "SQL", color: "#E48900" },
    { label: "DBMS", color: PINK },
  ]

  return (
    <section id="home" style={{ width:"100%", minHeight: isMobile ? "auto" : "calc(100vh - 80px)",
      height: isMobile ? "auto" : "calc(100vh - 80px)",
      marginTop: isMobile ? 64 : 80,
      background: theme.heroBg,
      padding: isMobile ? "40px 16px 60px" : isTablet ? "40px 24px 60px" : "0 60px",
      display: isMobile ? "flex" : "grid",
      flexDirection: isMobile ? "column" : undefined,
      gridTemplateColumns: isMobile ? undefined : "1fr 1fr",
      alignItems:"center", gap: isMobile ? 40 : isTablet ? 48 : 80,
      position:"relative", overflow:"hidden", boxSizing:"border-box",
      transition: "background 0.4s ease" }}>

      {/* Floating Orbs Background */}
      <FloatingOrb color={ACCENT} size={300} top="-5%" left="-5%" delay={0} />
      <FloatingOrb color={PINK} size={200} top="60%" left="10%" delay={2} />
      <FloatingOrb color={CYAN} size={250} top="10%" left="70%" delay={1} />
      <FloatingOrb color={AMBER} size={150} top="70%" left="80%" delay={3} />

      {/* LEFT COLUMN */}
      <div style={{ display:"flex", flexDirection:"column", alignItems: isMobile ? "center" : "flex-start", zIndex:1, order: isMobile ? 2 : 1 }}>

        {/* Badge */}
        <motion.span initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.55, ease:"easeOut", delay:0.2 }}
          style={{ display:"inline-flex", alignItems:"center", gap:8,
            background: theme.badgeBg, backdropFilter:"blur(10px)",
            border: `1.5px solid ${theme.socialBtnBorder}`,
            borderRadius:24, padding:"8px 20px", fontSize:13, fontWeight:600,
            color: ACCENT, letterSpacing:0.5, marginBottom:28,
            transition: "background 0.3s ease, border-color 0.3s ease" }}>
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✱
          </motion.span>
          HELLO, WORLD!
        </motion.span>

        {/* Headline */}
        <motion.h1 initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1], delay:0.4 }}
          style={{ fontSize:"clamp(28px,4vw,52px)", fontWeight:800, lineHeight:1.15,
            color: theme.headingAlt, letterSpacing:"-1px", marginBottom:24, fontFamily:"'Inter',sans-serif",
            textAlign: isMobile ? "center" : "left",
            transition: "color 0.3s ease" }}>
          I'm{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366F1, #EC4899, #06B6D4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Ziyaurrahman</span>,<br/>
          <span style={{ position:"relative", display:"inline-block", paddingBottom:6 }}>
            a Full Stack Developer.
            <HandDrawnUnderline/>
          </span>
        </motion.h1>

        {/* About Text */}
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.55, ease:"easeOut", delay:0.6 }}
          style={{ fontSize: isMobile ? 14 : 16, fontWeight:400, lineHeight:1.75, color: theme.text,
            maxWidth:500, marginBottom:24, fontFamily:"'Inter',sans-serif",
            textAlign: isMobile ? "center" : "left",
            transition: "color 0.3s ease" }}>
          Engineering student from <strong style={{ color: ACCENT }}>Jaipur, Rajasthan</strong> — passionate about
          building end-to-end web applications. I design clean UIs on the frontend
          and architect robust systems on the backend. From algorithms in C/C++ to
          full-stack apps with React & Node.js, I turn ideas into real products.
        </motion.p>

        {/* Skill Tags */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.55, delay:0.7 }}
          style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:32, justifyContent: isMobile ? "center" : "flex-start" }}>
          {skills.map(s => <SkillTag key={s.label} label={s.label} color={s.color}/>)}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.5, ease:[0.34,1.56,0.64,1], delay:0.8 }}
          style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap", justifyContent: isMobile ? "center" : "flex-start" }}>

          <motion.button
            style={{ fontFamily:"'Inter',sans-serif", fontSize:15, fontWeight:600,
              color:"#fff",
              background:"linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
              backgroundSize:"200% 200%",
              border:"none",
              borderRadius:12, padding:"14px 28px", cursor:"pointer",
              boxShadow:"0 4px 20px rgba(99,102,241,0.3)",
            }}
            whileHover={{ scale:1.04, boxShadow:"0 8px 30px rgba(99,102,241,0.45)", y:-2, transition:{ duration:0.22 } }}
            whileTap={{ scale:0.97 }}
            onClick={() => window.open('https://github.com/ziyaur-12', '_blank')}>
            View My Projects →
          </motion.button>

          <motion.button
            style={{ fontFamily:"'Inter',sans-serif", fontSize:15, fontWeight:600,
              color: ACCENT, background: isDark ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.7)",
              backdropFilter:"blur(10px)",
              border:`2px solid ${ACCENT}`,
              borderRadius:12, padding:"14px 28px", cursor:"pointer" }}
            whileHover={{ backgroundColor: ACCENT, color:"#fff", y:-2,
              boxShadow:"0 4px 20px rgba(99,102,241,0.3)", transition:{ duration:0.22 } }}
            whileTap={{ scale:0.97 }}
            onClick={() => window.location.href = 'tel:+919136341425'}>
            Hire Me
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center",
        position:"relative", width:"100%", height: isMobile ? "auto" : "100%", zIndex:1, order: isMobile ? 1 : 2 }}>

        {/* Portrait with gradient border */}
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1, ease:[0.22,1,0.36,1], delay:0.3 }}
          style={{ position:"relative", width: isMobile ? "min(280px, 75vw)" : isTablet ? 320 : 420,
            height: isMobile ? "min(350px, 95vw)" : isTablet ? 400 : 520,
            borderRadius:"210px 210px 12px 12px", overflow:"hidden",
            background:"linear-gradient(160deg, #6366F1, #EC4899, #06B6D4)",
            boxShadow:"0 20px 60px rgba(99,102,241,0.25), 0 0 100px rgba(236,72,153,0.15)",
            padding:3, flexShrink:0 }}>
          <div style={{ width:"100%", height:"100%", borderRadius:"208px 208px 10px 10px", overflow:"hidden" }}>
            <img src={myPhoto} alt="Ziyaurrahman - Full Stack Developer"
              style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}/>
          </div>
        </motion.div>

        {/* Circular Badge */}
        {!isMobile && (
        <motion.div initial={{ opacity:0, scale:0.5, rotate:-20 }} animate={{ opacity:1, scale:1, rotate:-8 }}
          transition={{ duration:0.7, ease:[0.34,1.56,0.64,1], delay:0.9 }}
          style={{ position:"absolute", top:"calc(50% - 260px + 62px)", left:"calc(50% - 210px - 35px)",
            width:140, height:140, borderRadius:"50%",
            background: theme.glassBgLight, backdropFilter:"blur(10px)",
            border:"3px solid transparent",
            backgroundImage: isDark
              ? "linear-gradient(#1A1A24,#1A1A24),linear-gradient(135deg,#6366F1,#EC4899)"
              : "linear-gradient(white,white),linear-gradient(135deg,#6366F1,#EC4899)",
            backgroundOrigin:"border-box", backgroundClip:"padding-box,border-box",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 8px 32px rgba(99,102,241,0.2)", zIndex:10,
            transition: "background 0.3s ease" }}>
          <motion.div style={{ position:"absolute", inset:0, width:"100%", height:"100%", originX:"50%", originY:"50%" }}
            animate={{ rotate:360 }} transition={{ duration:12, ease:"linear", repeat:Infinity }}>
            <CircularText/>
          </motion.div>
          <div style={{ width:42, height:42, borderRadius:"50%",
            background:"linear-gradient(135deg, #6366F1, #EC4899)",
            display:"flex", alignItems:"center", justifyContent:"center", zIndex:1 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 16 L15 5 M15 5 H7 M15 5 V13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        )}

        {/* Stats Card */}
        {!isMobile && (
        <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }}
          transition={{ duration:0.6, delay:1.1 }}
          style={{ position:"absolute", bottom:"12%", right:"-2%",
            background: theme.glassBgStrong, backdropFilter:"blur(16px)",
            borderRadius:16, padding:"16px 20px",
            boxShadow: isDark ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(99,102,241,0.15)",
            border: `1px solid ${isDark ? "rgba(99,102,241,0.2)" : "rgba(99,102,241,0.15)"}`,
            display:"flex", gap:24, zIndex:10,
            transition: "background 0.3s ease, border-color 0.3s ease" }}>
          {[
            { value:"2", label:"Languages", color: ACCENT },
            { value:"10+", label:"Projects", color: PINK },
            { value:"3+", label:"Yrs Learning", color: CYAN },
          ].map(({ value, label, color }) => (
            <div key={label} style={{ textAlign:"center" }}>
              <div style={{ fontSize:22, fontWeight:800, color, letterSpacing:"-0.5px", fontFamily:"'Inter',sans-serif" }}>{value}</div>
              <div style={{ fontSize:11, fontWeight:500, color: theme.textLight, marginTop:2, fontFamily:"'Inter',sans-serif" }}>{label}</div>
            </div>
          ))}
        </motion.div>
        )}
      </div>

      {/* SPARKLES */}
      {!isMobile && (
      <div style={{ position:"absolute", top:"13%", right:"11%",
        display:"flex", flexDirection:"column", gap:14, alignItems:"center", pointerEvents:"none" }}>
        <Sparkle size={42} delayOffset={0} color={PINK}/>
        <Sparkle size={26} delayOffset={-7} color={CYAN}/>
      </div>
      )}

      {/* WAVES */}
      {!isMobile && (
      <div style={{ position:"absolute", bottom:"23%", right:"7%", pointerEvents:"none" }}>
        <WavyLines/>
      </div>
      )}

    </section>
  )
}
