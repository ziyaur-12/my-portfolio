import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ACCENT = "#6366F1"
const PINK = "#EC4899"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", v => {
    setVisible(v > 0.15)
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(99,102,241,0.4)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 32, right: 32,
            width: 50, height: 50,
            borderRadius: "50%",
            border: "none",
            background: `linear-gradient(135deg, ${ACCENT}, ${PINK})`,
            color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
            zIndex: 90,
          }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp size={22} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
