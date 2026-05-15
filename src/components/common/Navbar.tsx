import Container from "./Container"

function Navbar() {
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
            bg-white/5
            backdrop-blur-md
            px-6
            py-4
          "
                >
                    <h1 className="text-sm font-semibold tracking-[0.2em] uppercase">
                        Sagar
                    </h1>

                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#projects"
                            className="text-sm text-[#A1A1AA] transition hover:text-white"
                        >
                            Projects
                        </a>

                        <a
                            href="#dsa"
                            className="text-sm text-[#A1A1AA] transition hover:text-white"
                        >
                            DSA
                        </a>

                        <a
                            href="#skills"
                            className="text-sm text-[#A1A1AA] transition hover:text-white"
                        >
                            Skills
                        </a>

                        <a
                            href="#about"
                            className="text-sm text-[#A1A1AA] transition hover:text-white"
                        >
                            About
                        </a>

                        <a
                            href="#contact"
                            className="text-sm text-[#A1A1AA] transition hover:text-white"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Navbar