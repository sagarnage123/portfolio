import {AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Container from "./Container"
import { Menu } from "lucide-react"

const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "DSA", href: "#dsa" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
]
function Navbar() {

    const [activeLink, setActiveLink] = useState("#projects")
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <Container>
                <div
                    className="
    mt-4
    flex
    items-center
    justify-between
    rounded-2xl
    border
    border-white/10
    bg-white/3
    supports-backdrop-filter:bg-black/20
    backdrop-blur-md
    shadow-[0_8px_30px_rgba(0,0,0,0.35)]
    px-6
    py-2.5
  "
                >
                    <h1 className="text-sm font-semibold tracking-[0.2em] uppercase">
                        Sagar
                    </h1>

                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.href

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.href)}
                                    className="
          relative
          px-4
          py-2
          text-sm
          font-medium
          transition-colors
        "
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-pill"
                                            className="
              absolute
              inset-0
              rounded-xl
              bg-white/10
              border
              border-white/10
            "
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    <span
                                        className={`
            relative z-10 transition-colors
            ${isActive
                                                ? "text-white"
                                                : "text-[#A1A1AA] hover:text-white"
                                            }
          `}
                                    >
                                        {link.label}
                                    </span>
                                </a>
                            )
                        })}
                    </nav>
                    <motion.button
                        whileTap={{
                            scale: 0.92,
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        className="
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-2
                            text-white
                            md:hidden
                        "
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <Menu size={20} />
                    </motion.button>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -10,
                            }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="
      mt-3
      flex
      flex-col
      gap-1
      rounded-2xl
      border
      border-white/10
      bg-[#111117]/95
      p-2
      backdrop-blur-xl
      md:hidden
    "
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.href)
                                    setIsOpen(false)
                                }}
                                className={`
  rounded-2xl
  px-4
  py-3
  text-sm
  transition-all
  duration-200
  active:scale-[0.98]

  ${activeLink === link.href
                                        ? "bg-white/8 text-white"
                                        : "text-[#A1A1AA] hover:bg-white/6 hover:text-white"
                                    }
`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
                </AnimatePresence>
            </Container>
        </header>
    )
}

export default Navbar