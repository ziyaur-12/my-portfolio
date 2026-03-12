import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"

export default function CursorFollower() {
  const isMobile = useIsMobile()
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 22, stiffness: 150, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Outer ring (slower follow)
  const outerX = useSpring(mouseX, { damping: 30, stiffness: 80, mass: 1 })
  const outerY = useSpring(mouseY, { damping: 30, stiffness: 80, mass: 1 })

  useEffect(() => {
    if (isMobile) return

    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener("mousemove", handleMove)
    document.addEventListener("mouseleave", handleLeave)
    document.addEventListener("mouseenter", handleEnter)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseleave", handleLeave)
      document.removeEventListener("mouseenter", handleEnter)
    }
  }, [isMobile, mouseX, mouseY, visible])

  if (isMobile) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed",
          left: x,
          top: y,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${ACCENT}, ${PINK})`,
          pointerEvents: "none",
          zIndex: 9998,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Outer glowing ring */}
      <motion.div
        style={{
          position: "fixed",
          left: outerX,
          top: outerY,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `2px solid ${ACCENT}`,
          background: "rgba(99,102,241,0.06)",
          boxShadow: `0 0 16px rgba(99,102,241,0.2), 0 0 40px rgba(236,72,153,0.08)`,
          pointerEvents: "none",
          zIndex: 9997,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 0.8 : 0,
        }}
      />
    </>
  )
}
