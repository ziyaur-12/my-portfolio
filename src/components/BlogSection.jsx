import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight, BookOpen, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useIsMobile } from '../hooks/useIsMobile'

const ACCENT = "#6366F1"
const PINK = "#EC4899"
const CYAN = "#06B6D4"

// =====================================================
// YAHAN APNE BLOGS ADD KARO
// Naya blog add karne ke liye ek aur object copy karke paste karo
// =====================================================

const blogs = [
  {
    id: 1,
    title: "How I Built My Developer Portfolio Website",
    summary: "A complete guide on how I planned, designed, and built my portfolio website using React, Vite, Framer Motion, and deployed it with Vercel.",
    date: "March 2026",
    readTime: "8 min read",
    tags: ["React", "Vite", "Portfolio", "Vercel"],
    image: "/images/blogs/blog1.png",
    color: ACCENT,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "Every developer needs a portfolio website to showcase their skills, projects, and experience. A portfolio acts as a personal website where recruiters and clients can see your work and understand your abilities." },
      { type: "p", text: "In this article, I will share how I built my own developer portfolio website and what technologies I used to create it." },

      { type: "h2", text: "Why I Built a Portfolio Website" },
      { type: "p", text: "As a web developer, having a portfolio is very important. It helps demonstrate real projects instead of just listing skills on a resume." },
      { type: "list", items: [
        "Showcase my web development projects",
        "Share information about my technical skills",
        "Provide links to my GitHub and LinkedIn profiles",
        "Allow recruiters to easily contact me",
      ]},
      { type: "p", text: "A well-designed portfolio helps create a strong first impression." },

      { type: "h2", text: "Planning the Portfolio" },
      { type: "p", text: "Before starting development, I planned the structure of the website. I wanted it to be simple, modern, and easy to navigate." },
      { type: "p", text: "The main sections of my portfolio include:" },
      { type: "list", items: [
        "Hero Section",
        "About Me",
        "Skills",
        "Projects",
        "Blog",
        "Contact",
      ]},
      { type: "p", text: "This structure helps visitors quickly understand who I am and what I do." },

      { type: "h2", text: "Technologies I Used" },
      { type: "p", text: "To build my portfolio, I used modern web development tools and technologies." },
      { type: "p", text: "Frontend Technologies:" },
      { type: "list", items: [
        "HTML — Structure of all pages and sections",
        "CSS — Styling, responsive layouts, and custom designs",
        "JavaScript — Logic, interactivity, and dynamic behavior",
        "React — Component-based architecture for building the UI",
        "Vite — Lightning-fast build tool and dev server",
        "Framer Motion — Smooth scroll animations, hover effects, and page transitions",
        "Lucide React — Modern SVG icon library for all icons used in the portfolio",
      ]},
      { type: "p", text: "Other Tools:" },
      { type: "list", items: [
        "Git — Version control for tracking all code changes",
        "GitHub — Remote repository for storing and sharing the project",
        "Vercel — Deployment platform for hosting the live website",
        "VS Code — Code editor used for development",
        "Google Fonts (Inter) — Clean and professional typography",
      ]},
      { type: "p", text: "These tools allowed me to build a fast, responsive, and visually appealing website." },

      { type: "h2", text: "Designing the User Interface" },
      { type: "p", text: "While designing the portfolio, I focused on simplicity and readability. I used a clean layout and organized the content into sections." },
      { type: "p", text: "Some important design decisions included:" },
      { type: "list", items: [
        "Responsive design for mobile and desktop",
        "Clear navigation menu with scroll-based active highlighting",
        "Project cards to showcase work with GitHub integration",
        "Attractive gradient color scheme (Indigo, Pink, Cyan)",
        "Dark mode and Light mode toggle",
        "Animated cursor follower effect",
        "Scroll progress bar at the top",
        "Scroll-to-top floating button",
      ]},
      { type: "p", text: "The goal was to create a website that is both professional and easy to use." },

      { type: "h2", text: "Projects Section" },
      { type: "p", text: "The projects section is one of the most important parts of my portfolio. Here I display the projects I have built, along with descriptions and technologies used." },
      { type: "p", text: "Each project includes:" },
      { type: "list", items: [
        "Project title",
        "Description",
        "Technology stack",
        "GitHub repository link",
        "Live demo link",
      ]},
      { type: "p", text: "This allows visitors to explore my work in detail." },

      { type: "h2", text: "Adding a Blog Section" },
      { type: "p", text: "I also added a blog section where I share my learning experiences, technical knowledge, and development journey." },
      { type: "p", text: "Writing blogs helps me:" },
      { type: "list", items: [
        "Share knowledge with other developers",
        "Document my learning process",
        "Improve my understanding of technical concepts",
      ]},

      { type: "h2", text: "Deploying the Website" },
      { type: "p", text: "After completing development, I deployed my portfolio using Vercel." },
      { type: "p", text: "Deployment steps:" },
      { type: "list", items: [
        "Upload the project to GitHub",
        "Connect the GitHub repository to Vercel",
        "Deploy the website",
      ]},
      { type: "p", text: "This allowed my portfolio to go live and be accessible online." },

      { type: "h2", text: "What I Learned" },
      { type: "p", text: "Building my portfolio website helped me improve several skills including:" },
      { type: "list", items: [
        "Frontend development with React and component architecture",
        "Responsive design using CSS and media queries",
        "Animations using Framer Motion",
        "Project structuring and clean code practices",
        "Deployment using Vercel and Git-based workflows",
      ]},
      { type: "p", text: "It also helped me present my work professionally." },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Creating a developer portfolio is an important step for anyone learning web development. It allows you to showcase your projects, demonstrate your skills, and build a professional online presence." },
      { type: "p", text: "My portfolio website represents my journey as a developer and the projects I have built so far. I will continue improving it by adding new projects, blogs, and features as I grow in my career." },
    ],
  },
  
  {
    id: 2,
    title: "How to Upload a Project to GitHub Using Git (Step-by-Step Guide)",
    summary: "A complete beginner-friendly guide on uploading projects to GitHub using Git — from initializing a repo to pushing code, with all essential commands explained.",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Git", "GitHub", "Version Control"],
    image: "/images/blogs/blog3.png",
    color: CYAN,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "GitHub is one of the most important platforms for developers. It allows you to store your code online, track changes, and collaborate with other developers. Every developer should know how to upload their projects to GitHub because recruiters often review GitHub profiles to understand coding skills and project experience." },
      { type: "p", text: "In this article, I will explain how I upload my projects to GitHub using Git step by step." },

      { type: "h2", text: "Why GitHub is Important for Developers" },
      { type: "p", text: "Before uploading a project, it is important to understand why GitHub is useful." },
      { type: "list", items: [
        "It stores your code securely online",
        "It helps track changes in your project",
        "It allows collaboration with other developers",
        "Recruiters can see your projects and coding activity",
        "It works as a public portfolio of your work",
      ]},
      { type: "p", text: "Because of these reasons, maintaining an active GitHub profile is very important for any developer." },

      { type: "h2", text: "Step 1: Create a GitHub Repository" },
      { type: "p", text: "First, open GitHub and create a new repository." },
      { type: "list", items: [
        "Go to GitHub.com",
        "Click on New Repository",
        "Enter a repository name",
        "Add a short description (optional)",
        "Choose Public or Private",
        "Click Create Repository",
      ]},
      { type: "p", text: "After creating the repository, GitHub will show instructions to connect your local project." },

      { type: "h2", text: "Step 2: Initialize Git in Your Project" },
      { type: "p", text: "Open the terminal in your project folder and run the following command:" },
      { type: "code", text: "git init" },
      { type: "p", text: "This command initializes Git in your project directory and allows Git to track changes." },

      { type: "h2", text: "Step 3: Add Project Files" },
      { type: "p", text: "Now add all project files to the Git staging area." },
      { type: "code", text: "git add ." },
      { type: "p", text: "The dot (.) means all files in the project will be added." },

      { type: "h2", text: "Step 4: Commit the Changes" },
      { type: "p", text: "A commit saves a snapshot of your project." },
      { type: "code", text: 'git commit -m "Initial project upload"' },
      { type: "p", text: "The message explains what changes you made." },

      { type: "h2", text: "Step 5: Connect Local Project to GitHub" },
      { type: "p", text: "Now connect your local repository with GitHub." },
      { type: "code", text: "git remote add origin https://github.com/username/repository-name.git" },
      { type: "p", text: "Replace username and repository-name with your actual GitHub details." },

      { type: "h2", text: "Step 6: Push Code to GitHub" },
      { type: "p", text: "Finally upload your code using:" },
      { type: "code", text: "git push -u origin main" },
      { type: "p", text: "After running this command, your project will appear on your GitHub repository." },

      { type: "h2", text: "Example Use Case" },
      { type: "p", text: "For example, when I build a web development project such as a portfolio website or full stack application, I upload the entire project to GitHub. This helps me maintain version control and allows others to see my work." },

      { type: "h2", text: "Common Git Commands Developers Should Know" },
      { type: "p", text: "Some commonly used Git commands include:" },
      { type: "code", text: "git status\ngit pull\ngit push\ngit clone\ngit branch\ngit checkout" },
      { type: "p", text: "Learning these commands helps developers manage projects more efficiently." },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Uploading projects to GitHub is an essential skill for every developer. It helps maintain version control, share projects with others, and build a strong developer profile." },
      { type: "p", text: "If you are learning programming or web development, start uploading every project you build to GitHub. Over time, your GitHub profile will become a strong portfolio that shows your coding journey and experience." },
      { type: "p", text: "Thanks for reading. I hope this guide helps you upload your projects to GitHub easily." },
    ],
  },
]

function BlogReaderModal({ blog, onClose }) {
  const { theme } = useTheme()
  const isMobile = useIsMobile()

  if (!blog || !blog.content) return null

  const renderBlock = (block, i) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={i} style={{
            fontSize: isMobile ? 20 : 24, fontWeight: 700, color: theme.heading,
            fontFamily: "'Inter',sans-serif", marginTop: 32, marginBottom: 12,
            paddingBottom: 8, borderBottom: `2px solid ${blog.color}20`,
          }}>
            {block.text}
          </h2>
        )
      case "p":
        return (
          <p key={i} style={{
            fontSize: isMobile ? 14 : 15, lineHeight: 1.8, color: theme.textMuted,
            fontFamily: "'Inter',sans-serif", marginBottom: 14,
          }}>
            {block.text}
          </p>
        )
      case "code":
        return (
          <pre key={i} style={{
            background: theme.cardBg === "#fff" ? "#1E1E2E" : "#0D0D14",
            color: "#A6E3A1", borderRadius: 12, padding: "16px 20px",
            fontSize: 13, fontFamily: "'Fira Code', 'Consolas', monospace",
            lineHeight: 1.7, marginBottom: 14, overflowX: "auto",
            border: `1px solid ${blog.color}20`,
          }}>
            {block.text}
          </pre>
        )
      case "list":
        return (
          <ul key={i} style={{
            paddingLeft: 24, marginBottom: 14,
            listStyleType: "none",
          }}>
            {block.items.map((item, j) => (
              <li key={j} style={{
                fontSize: isMobile ? 14 : 15, lineHeight: 1.8,
                color: theme.textMuted, fontFamily: "'Inter',sans-serif",
                marginBottom: 6, position: "relative", paddingLeft: 18,
              }}>
                <span style={{
                  position: "absolute", left: 0, top: 10,
                  width: 7, height: 7, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${blog.color}, ${PINK})`,
                }} />
                {item}
              </li>
            ))}
          </ul>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
        zIndex: 9999, display: "flex", justifyContent: "center",
        padding: isMobile ? "16px" : "40px",
        overflowY: "auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          background: theme.sectionBg, borderRadius: 24,
          width: "100%", maxWidth: 760,
          maxHeight: "90vh", overflowY: "auto",
          padding: isMobile ? "24px 18px 32px" : "40px 48px 48px",
          position: "relative",
          border: `1px solid ${theme.cardBorder}`,
          boxShadow: `0 24px 80px rgba(0,0,0,0.3)`,
          alignSelf: "flex-start",
          marginTop: isMobile ? 10 : 30,
        }}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "sticky", top: 0, float: "right",
            width: 40, height: 40, borderRadius: 12,
            background: `${blog.color}15`, border: `1px solid ${blog.color}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: blog.color, zIndex: 10,
          }}
        >
          <X size={20} />
        </motion.button>

        {/* Blog number */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          marginBottom: 16,
        }}>
          <span style={{
            width: 32, height: 32, borderRadius: 8,
            background: `linear-gradient(135deg, ${blog.color}, ${blog.color}CC)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: 13, fontWeight: 800, fontFamily: "'Inter',sans-serif",
          }}>
            {String(blog.id).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: 12, fontWeight: 600, color: blog.color,
            fontFamily: "'Inter',sans-serif",
          }}>
            Blog #{blog.id}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: isMobile ? 22 : 30, fontWeight: 800, color: theme.heading,
          fontFamily: "'Inter',sans-serif", lineHeight: 1.3,
          marginBottom: 16,
        }}>
          {blog.title}
        </h1>

        {/* Meta */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16, marginBottom: 8,
          flexWrap: "wrap",
        }}>
          <span style={{
            display: "flex", alignItems: "center", gap: 5,
            fontSize: 13, color: theme.textLight, fontFamily: "'Inter',sans-serif",
          }}>
            <Calendar size={14} /> {blog.date}
          </span>
          <span style={{
            display: "flex", alignItems: "center", gap: 5,
            fontSize: 13, color: theme.textLight, fontFamily: "'Inter',sans-serif",
          }}>
            <Clock size={14} /> {blog.readTime}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
          {blog.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 11, fontWeight: 600, color: blog.color,
              background: `${blog.color}12`, padding: "4px 12px",
              borderRadius: 20, fontFamily: "'Inter',sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: 2, borderRadius: 2, marginBottom: 24,
          background: `linear-gradient(90deg, ${blog.color}, ${PINK}, transparent)`,
          opacity: 0.3,
        }} />

        {/* Content */}
        <div>
          {blog.content.map((block, i) => renderBlock(block, i))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function BlogCard({ blog, delay, onReadMore }) {
  const { theme } = useTheme()
  const isMobile = useIsMobile()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, boxShadow: `0 20px 50px ${blog.color}22` }}
      style={{
        background: theme.cardBg,
        borderRadius: 20,
        border: `1px solid ${theme.cardBorder}`,
        overflow: "hidden",
        cursor: "default",
        transition: "box-shadow 0.3s, background 0.3s, border-color 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${blog.color}, ${blog.color}88, transparent)`,
      }} />

      {/* Image */}
      <div style={{
        width: "100%", height: isMobile ? 180 : 200,
        overflow: "hidden", position: "relative",
      }}>
        <img
          src={blog.image}
          alt={blog.title}
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
          background: `linear-gradient(135deg, ${blog.color}15, ${PINK}10)`,
          alignItems: "center", justifyContent: "center",
          position: "absolute", top: 0, left: 0,
          flexDirection: "column", gap: 8,
        }}>
          <BookOpen size={36} color={blog.color} style={{ opacity: 0.5 }} />
          <span style={{
            color: theme.textMuted, fontSize: 13,
            fontFamily: "'Inter',sans-serif",
          }}>
            Blog {blog.id} Cover
          </span>
        </div>

        {/* Blog number badge */}
        <div style={{
          position: "absolute", top: 14, left: 14,
          width: 36, height: 36, borderRadius: 10,
          background: `linear-gradient(135deg, ${blog.color}, ${blog.color}CC)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 14, fontWeight: 800,
          fontFamily: "'Inter',sans-serif",
          boxShadow: `0 4px 12px ${blog.color}40`,
        }}>
          {String(blog.id).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Meta info */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
          <span style={{
            display: "flex", alignItems: "center", gap: 5,
            fontSize: 12, color: theme.textLight,
            fontFamily: "'Inter',sans-serif",
          }}>
            <Calendar size={13} />
            {blog.date}
          </span>
          <span style={{
            display: "flex", alignItems: "center", gap: 5,
            fontSize: 12, color: theme.textLight,
            fontFamily: "'Inter',sans-serif",
          }}>
            <Clock size={13} />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 17, fontWeight: 700, color: theme.heading,
          fontFamily: "'Inter',sans-serif", marginBottom: 10,
          lineHeight: 1.45, transition: "color 0.3s",
        }}>
          {blog.title}
        </h3>

        {/* Summary */}
        <p style={{
          fontSize: 13, lineHeight: 1.7, color: theme.textMuted,
          fontFamily: "'Inter',sans-serif", marginBottom: 16,
          flex: 1, transition: "color 0.3s",
        }}>
          {blog.summary}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {blog.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 11, fontWeight: 600,
              color: blog.color,
              background: `${blog.color}12`,
              padding: "3px 10px", borderRadius: 20,
              fontFamily: "'Inter',sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <motion.div
          whileHover={{ x: 4 }}
          onClick={() => onReadMore(blog)}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600,
            color: blog.color,
            fontFamily: "'Inter',sans-serif",
            cursor: "pointer",
          }}
        >
          Read More <ArrowRight size={15} />
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function BlogSection() {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [openBlog, setOpenBlog] = useState(null)

  return (
    <section id="blog" style={{
      padding: isMobile ? "60px 16px" : "100px 24px",
      background: theme.sectionBgGradient2,
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
            My Writings
          </motion.span>

          <h2 style={{
            fontSize: isMobile ? 28 : 40, fontWeight: 800, marginTop: 10,
            fontFamily: "'Inter',sans-serif",
            background: "linear-gradient(135deg, #6366F1, #EC4899, #06B6D4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Blog & Articles
          </h2>

          <p style={{
            fontSize: isMobile ? 14 : 16, color: theme.textMuted,
            fontFamily: "'Inter',sans-serif", marginTop: 12,
            maxWidth: 520, margin: "12px auto 0",
            lineHeight: 1.7, transition: "color 0.3s",
          }}>
            Sharing my knowledge and experiences through technical blog posts.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(340px, 1fr))",
          gap: isMobile ? 20 : 28,
        }}>
          {blogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} delay={i * 0.12} onReadMore={setOpenBlog} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openBlog && openBlog.content && (
          <BlogReaderModal blog={openBlog} onClose={() => setOpenBlog(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
