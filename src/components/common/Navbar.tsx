import { motion } from "framer-motion"
import { useState } from "react"
import Container from "./Container"

const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "DSA", href: "#dsa" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
]
function Navbar() {

    const [activeLink, setActiveLink] = useState("#projects")

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
                </div>
            </Container>
        </header>
    )
}

export default Navbar