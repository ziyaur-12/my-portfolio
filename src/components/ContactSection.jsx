import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const ACCENT = "#6366F1"

// FormSubmit.co — FREE, no signup needed!
const FORMSUBMIT_EMAIL = "ziyaurrahman457@gmail.com"

function InfoCard({ icon: Icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(99,102,241,0.12)" }}
      style={{
        display: "flex", alignItems: "center", gap: 16,
        background: "#fff", borderRadius: 14, padding: "20px 24px",
        border: "1px solid #E5E5E5", textDecoration: "none",
        cursor: "pointer", transition: "box-shadow 0.3s",
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: "rgba(99,102,241,0.08)", display: "flex",
        alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={20} color={ACCENT} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#999", fontFamily: "'Inter',sans-serif", marginBottom: 4 }}>
          {title}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#333", fontFamily: "'Inter',sans-serif" }}>
          {value}
        </div>
      </div>
    </motion.a>
  )
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New message from ${form.name} — Portfolio`,
          _template: "table",
        }),
      })

      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setStatus(null), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const inputStyle = {
    width: "100%", padding: "14px 18px", borderRadius: 12,
    border: "1.5px solid #E0E0E0", fontSize: 15, fontWeight: 500,
    fontFamily: "'Inter',sans-serif", outline: "none",
    transition: "border-color 0.2s", background: "#FAFAFF",
  }

  return (
    <section id="contact" style={{
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
        CONTACT
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
        Let's <span style={{ color: ACCENT }}>connect</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: 15, color: "#666", textAlign: "center",
          maxWidth: 500, marginBottom: 56, fontFamily: "'Inter',sans-serif",
        }}
      >
        Have a project idea or want to work together? Drop me a message
        and I'll get back to you as soon as possible!
      </motion.p>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48,
        width: "100%", maxWidth: 960,
      }}>
        {/* Left — Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <InfoCard icon={Mail} title="EMAIL" value="ziyaurrahman457@gmail.com" href="mailto:ziyaurrahman457@gmail.com" />
          <InfoCard icon={Phone} title="PHONE" value="+91 91363 41425" href="tel:+919136341425" />
          <InfoCard icon={MapPin} title="LOCATION" value="Jaipur, Rajasthan, India" href="https://maps.google.com/?q=Jaipur+Rajasthan" />
        </motion.div>

        {/* Right — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = ACCENT}
            onBlur={e => e.target.style.borderColor = "#E0E0E0"}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = ACCENT}
            onBlur={e => e.target.style.borderColor = "#E0E0E0"}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
            onFocus={e => e.target.style.borderColor = ACCENT}
            onBlur={e => e.target.style.borderColor = "#E0E0E0"}
          />

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: ACCENT, color: "#fff", border: `2px solid ${ACCENT}`,
              borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 600,
              fontFamily: "'Inter',sans-serif", cursor: status === "sending" ? "wait" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            <Send size={18} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status Messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                color: "#10B981", fontSize: 14, fontWeight: 600,
                fontFamily: "'Inter',sans-serif",
              }}
            >
              <CheckCircle size={18} /> Message sent successfully!
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                color: "#EF4444", fontSize: 14, fontWeight: 600,
                fontFamily: "'Inter',sans-serif",
              }}
            >
              <AlertCircle size={18} /> Failed to send. Please try again or email directly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
