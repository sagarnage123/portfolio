function Footer() {
    return (
        <footer
            className="
        border-t
        border-white/10
        py-8
      "
        >
            <div
                className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          px-6
          text-sm
          text-[#71717A]
          md:flex-row
          md:px-10
          lg:px-16
        "
            >
                <p>
                    © 2026 Sagar Nage. All rights reserved.
                </p>

                <p>
                    Built with React, TypeScript & Framer Motion.
                </p>
            </div>
        </footer>
    )
}

export default Footer