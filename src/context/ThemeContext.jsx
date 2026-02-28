import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const lightTheme = {
  // Section backgrounds
  sectionBg: "#fff",
  sectionBgAlt: "#FAFAFF",
  sectionBgGradient1: "linear-gradient(180deg, #fff 0%, #FAFAFF 50%, #F5F3FF 100%)",
  sectionBgGradient2: "linear-gradient(180deg, #FAFAFF 0%, #F5F3FF 100%)",
  sectionBgGradient3: "linear-gradient(180deg, #fff 0%, #FAFAFF 100%)",
  sectionBgGradient4: "linear-gradient(180deg, #FAFAFF 0%, #EEF2FF 50%, #FCE7F3 100%)",
  sectionBgGradient5: "linear-gradient(180deg, #FAFAFF 0%, #FCE7F3 50%, #E0F2FE 100%)",
  heroBg: "linear-gradient(135deg, #E8E3FF 0%, #FCE7F3 30%, #E0F2FE 60%, #EEF2FF 100%)",

  // Card
  cardBg: "#fff",
  cardBorder: "#F0F0F0",
  cardShadow: "0 2px 12px rgba(0,0,0,0.04)",

  // Glass
  glassBg: "rgba(255,255,255,0.8)",
  glassBorder: "rgba(255,255,255,0.5)",
  glassBgStrong: "rgba(255,255,255,0.85)",
  glassBgLight: "rgba(255,255,255,0.9)",

  // Text
  heading: "#000",
  headingAlt: "#111",
  text: "#444",
  textSecondary: "#555",
  textMuted: "#666",
  textLight: "#888",
  textLighter: "#999",

  // Navbar
  navBg: "rgba(255,255,255,0.8)",
  navBorder: "rgba(99,102,241,0.1)",
  navLink: "#444",

  // Inputs
  inputBg: "#FAFAFF",
  inputBorder: "#E0E0E0",

  // Progress bars / dividers
  barBg: "#F0F0F0",
  divider: "#F0F0F0",

  // Footer
  footerBg: "linear-gradient(180deg, #111118 0%, #0F0F0F 100%)",
  footerText: "#999",
  footerBorder: "#333",
  footerCopyright: "#666",

  // Misc
  socialBtnColor: "#555",
  socialBtnBorder: "rgba(99,102,241,0.3)",
  tagBg: "rgba(99,102,241,0.08)",
  badgeBg: "rgba(255,255,255,0.8)",
  circularTextFill: "#000",
  scrollbarTrack: "#F5F5F5",

  // Background orb opacity
  orbOpacity: 1,
  decorOpacityMultiplier: 1,
}

const darkTheme = {
  // Section backgrounds
  sectionBg: "#0D0D14",
  sectionBgAlt: "#111118",
  sectionBgGradient1: "linear-gradient(180deg, #0D0D14 0%, #111118 50%, #13131F 100%)",
  sectionBgGradient2: "linear-gradient(180deg, #111118 0%, #13131F 100%)",
  sectionBgGradient3: "linear-gradient(180deg, #0D0D14 0%, #111118 100%)",
  sectionBgGradient4: "linear-gradient(180deg, #111118 0%, #15101E 50%, #101318 100%)",
  sectionBgGradient5: "linear-gradient(180deg, #111118 0%, #15101E 50%, #0E1318 100%)",
  heroBg: "linear-gradient(135deg, #13111F 0%, #1A1020 30%, #0E1318 60%, #111118 100%)",

  // Card
  cardBg: "#1A1A24",
  cardBorder: "#2A2A36",
  cardShadow: "0 2px 12px rgba(0,0,0,0.3)",

  // Glass
  glassBg: "rgba(26,26,36,0.85)",
  glassBorder: "rgba(255,255,255,0.08)",
  glassBgStrong: "rgba(26,26,36,0.9)",
  glassBgLight: "rgba(26,26,36,0.95)",

  // Text
  heading: "#F0F0F5",
  headingAlt: "#E8E8F0",
  text: "#B8B8C8",
  textSecondary: "#A0A0B0",
  textMuted: "#8888A0",
  textLight: "#707088",
  textLighter: "#606078",

  // Navbar
  navBg: "rgba(13,13,20,0.85)",
  navBorder: "rgba(99,102,241,0.15)",
  navLink: "#B8B8C8",

  // Inputs
  inputBg: "#1A1A24",
  inputBorder: "#2A2A36",

  // Progress bars / dividers
  barBg: "#2A2A36",
  divider: "#2A2A36",

  // Footer
  footerBg: "linear-gradient(180deg, #080810 0%, #050508 100%)",
  footerText: "#888",
  footerBorder: "#222",
  footerCopyright: "#555",

  // Misc
  socialBtnColor: "#999",
  socialBtnBorder: "rgba(99,102,241,0.4)",
  tagBg: "rgba(99,102,241,0.15)",
  badgeBg: "rgba(26,26,36,0.85)",
  circularTextFill: "#E8E8F0",
  scrollbarTrack: "#111118",

  // Background orb opacity
  orbOpacity: 0.6,
  decorOpacityMultiplier: 0.7,
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : false
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
