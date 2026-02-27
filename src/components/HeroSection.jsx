import { motion } from 'framer-motion'
import myPhoto from '../assets/photo.jpg'

function CircularText() {
  const cx = 70, cy = 70, r = 52
  return (
    <svg width="100%" height="100%" viewBox="0 0 140 140" style={{ position:"absolute", inset:0 }}>
      <defs>
        <path id="badgeCirclePath" d={`M ${cx},${cy - r} a ${r},${r} 0 1,1 -0.001,0`} />
      </defs>
      <text style={{ fontFamily:"'Inter',sans-serif", fontSize:9.5, fontWeight:700, fill:"#000", letterSpacing:"2px" }}>
        <textPath href="#badgeCirclePath" startOffset="50%" textAnchor="middle">
          OPEN TO WORK ★ FULL STACK DEV ★
        </textPath>
      </text>
    </svg>
  )
}

function Sparkle({ size, delayOffset = 0 }) {
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
      <circle cx={cx} cy={cx} r={cx-1} stroke="#6366F1" strokeWidth="1" opacity="0.15" fill="none"/>
      <path d={d} stroke="#6366F1" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
      <circle cx={cx} cy={cx} r="2" fill="#6366F1"/>
    </motion.svg>
  )
}

function WavyLines() {
  return (
    <motion.div style={{ display:"flex", flexDirection:"column", gap:8 }}
      animate={{ x:[0, 5, -3, 0] }} transition={{ duration:3, ease:"easeInOut", repeat:Infinity, times:[0,0.33,0.66,1] }}>
      {[0,1,2].map(i => (
        <svg key={i} width="100" height="12" viewBox="0 0 100 12" fill="none">
          <path d="M0 6 C8 1,17 11,25 6 C33 1,42 11,50 6 C58 1,67 11,75 6 C83 1,92 11,100 6"
            stroke="#6366F1" strokeWidth="2" strokeLinecap="round" fill="none"/>
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
        <path className="ul-p" d="M2 9 C25 3,48 12,72 7 C96 2,119 12,143 7 C167 2,190 11,214 6 C238 1,261 10,285 6 C309 2,325 9,338 7"
          stroke="#6366F1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path className="ul-s" d="M2 11 C30 7,55 13,85 9 C115 5,140 12,168 9 C196 6,222 12,250 8 C278 4,308 11,338 9"
          stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35"/>
      </svg>
    </>
  )
}

function SkillTag({ label }) {
  return (
    <motion.span whileHover={{ scale:1.08, backgroundColor:"#6366F1", color:"#fff" }}
      transition={{ duration:0.2 }}
      style={{ display:"inline-block", padding:"5px 14px", borderRadius:20,
        border:"1.5px solid #6366F1", color:"#6366F1", fontSize:12, fontWeight:600,
        fontFamily:"'Inter',sans-serif", cursor:"default", background:"rgba(99,102,241,0.06)" }}>
      {label}
    </motion.span>
  )
}

export default function HeroSection() {
  const skills = ["C", "C++", "Java", "Python", "React", "Node.js", "MongoDB", "SQL", "DBMS"]

  return (
    <section id="home" style={{ width:"100%", height:"calc(100vh - 80px)", marginTop:80,
      background:"linear-gradient(135deg, #E8E3FF 0%, #EEF2FF 50%, #F0EEFF 100%)",
      padding:"0 60px", display:"grid", gridTemplateColumns:"1fr 1fr",
      alignItems:"center", gap:80, position:"relative", overflow:"hidden", boxSizing:"border-box" }}>

      {/* LEFT COLUMN */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>

        {/* Badge */}
        <motion.span initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.55, ease:"easeOut", delay:0.2 }}
          style={{ display:"inline-block", background:"#fff", border:"2px solid #000",
            borderRadius:24, padding:"8px 20px", fontSize:13, fontWeight:600,
            color:"#000", letterSpacing:0.5, marginBottom:28 }}>
          ✱ HELLO, WORLD!
        </motion.span>

        {/* Headline */}
        <motion.h1 initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1], delay:0.4 }}
          style={{ fontSize:"clamp(34px,4vw,52px)", fontWeight:700, lineHeight:1.15,
            color:"#000", letterSpacing:"-1px", marginBottom:24, fontFamily:"'Inter',sans-serif" }}>
          I'm Ziyaurrahman,<br/>
          <span style={{ position:"relative", display:"inline-block", paddingBottom:6 }}>
            a Full Stack Developer.
            <HandDrawnUnderline/>
          </span>
        </motion.h1>

        {/* About Text */}
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.55, ease:"easeOut", delay:0.6 }}
          style={{ fontSize:16, fontWeight:400, lineHeight:1.75, color:"#444",
            maxWidth:500, marginBottom:24, fontFamily:"'Inter',sans-serif" }}>
          Engineering student from <strong>Jaipur, Rajasthan</strong> — passionate about
          building end-to-end web applications. I design clean UIs on the frontend
          and architect robust systems on the backend. From algorithms in C/C++ to
          full-stack apps with React & Node.js, I turn ideas into real products.
        </motion.p>

        {/* Skill Tags */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.55, delay:0.7 }}
          style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:32 }}>
          {skills.map(s => <SkillTag key={s} label={s}/>)}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.5, ease:[0.34,1.56,0.64,1], delay:0.8 }}
          style={{ display:"flex", gap:16, alignItems:"center" }}>

          <motion.button
            style={{ fontFamily:"'Inter',sans-serif", fontSize:15, fontWeight:600,
              color:"#fff", background:"#6366F1", border:"2px solid #6366F1",
              borderRadius:12, padding:"14px 28px", cursor:"pointer" }}
            whileHover={{ scale:1.04, boxShadow:"0 8px 24px rgba(99,102,241,0.35)", y:-2, transition:{ duration:0.22 } }}
            whileTap={{ scale:0.97 }}
            onClick={() => window.open('https://github.com/ziyaur-12', '_blank')}>
            View My Projects →
          </motion.button>

          <motion.button
            style={{ fontFamily:"'Inter',sans-serif", fontSize:15, fontWeight:600,
              color:"#000", background:"transparent", border:"2px solid #000",
              borderRadius:12, padding:"14px 28px", cursor:"pointer" }}
            whileHover={{ backgroundColor:"#000", color:"#fff", y:-2,
              boxShadow:"0 4px 12px rgba(0,0,0,0.15)", transition:{ duration:0.22 } }}
            whileTap={{ scale:0.97 }}
            onClick={() => window.location.href = 'tel:+919136341425'}>
            Hire Me
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center",
        position:"relative", width:"100%", height:"100%" }}>

        {/* Portrait */}
        <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:1, ease:[0.22,1,0.36,1], delay:0.3 }}
          style={{ position:"relative", width:420, height:520,
            borderRadius:"210px 210px 12px 12px", overflow:"hidden",
            background:"linear-gradient(160deg,#8B7DD8,#9B8CE8)",
            boxShadow:"0 20px 60px rgba(99,102,241,0.25)", flexShrink:0 }}>
          <img src={myPhoto} alt="Ziyaurrahman - Full Stack Developer"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}/>
        </motion.div>

        {/* Circular Badge */}
        <motion.div initial={{ opacity:0, scale:0.5, rotate:-20 }} animate={{ opacity:1, scale:1, rotate:-8 }}
          transition={{ duration:0.7, ease:[0.34,1.56,0.64,1], delay:0.9 }}
          style={{ position:"absolute", top:"calc(50% - 260px + 62px)", left:"calc(50% - 210px - 35px)",
            width:140, height:140, borderRadius:"50%", background:"#fff", border:"3px solid #000",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 8px 24px rgba(0,0,0,0.12)", zIndex:10 }}>
          <motion.div style={{ position:"absolute", inset:0, width:"100%", height:"100%", originX:"50%", originY:"50%" }}
            animate={{ rotate:360 }} transition={{ duration:12, ease:"linear", repeat:Infinity }}>
            <CircularText/>
          </motion.div>
          <div style={{ width:42, height:42, borderRadius:"50%", background:"#6366F1",
            display:"flex", alignItems:"center", justifyContent:"center", zIndex:1 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 16 L15 5 M15 5 H7 M15 5 V13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }}
          transition={{ duration:0.6, delay:1.1 }}
          style={{ position:"absolute", bottom:"12%", right:"-2%", background:"#fff",
            borderRadius:16, padding:"16px 20px", boxShadow:"0 8px 32px rgba(0,0,0,0.10)",
            border:"1px solid #E5E5E5", display:"flex", gap:24, zIndex:10 }}>
          {[
            { value:"2", label:"Languages" },
            { value:"10+", label:"Projects" },
            { value:"3+", label:"Yrs Learning" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign:"center" }}>
              <div style={{ fontSize:22, fontWeight:800, color:"#6366F1", letterSpacing:"-0.5px", fontFamily:"'Inter',sans-serif" }}>{value}</div>
              <div style={{ fontSize:11, fontWeight:500, color:"#888", marginTop:2, fontFamily:"'Inter',sans-serif" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SPARKLES */}
      <div style={{ position:"absolute", top:"13%", right:"11%",
        display:"flex", flexDirection:"column", gap:14, alignItems:"center", pointerEvents:"none" }}>
        <Sparkle size={42} delayOffset={0}/>
        <Sparkle size={26} delayOffset={-7}/>
      </div>

      {/* WAVES */}
      <div style={{ position:"absolute", bottom:"23%", right:"7%", pointerEvents:"none" }}>
        <WavyLines/>
      </div>

    </section>
  )
}