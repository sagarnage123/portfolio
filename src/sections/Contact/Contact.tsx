import Section from "../../components/common/Section"
import FadeIn from "../../components/animations/FadeIn"
function Contact() {
    return (
        <Section id="contact">
            <FadeIn>
                <div
                    className="
          mx-auto
          max-w-4xl
          rounded-4xl
          border
          border-white/10
          bg-[#111117]
          p-8
          text-center
          md:p-12
        "
            >
                <p
                    className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#8B5CF6]
          "
                >
                    Contact
                </p>

                <h2
                    className="
            mt-4
            text-2xl
            md:text-3xl
            font-semibold
            tracking-tight
          "
                >
                        Interested in meaningful engineering and thoughtful software products.
                </h2>

                <p
                    className="
            mx-auto
            mt-6
            max-w-2xl
            md:leading-8
            text-[#A1A1AA]
          "
                >
                        Open to internships, entry-level software engineering opportunities, and collaborations involving full stack development, backend systems, and problem solving.
                </p>

                <div
                    className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
                >
                    <a
                        href="mailto:sagernage1@gmail.com"
                        className="
              rounded-xl
              bg-linear-to-br
              from-[#8B5CF6]
              to-[#3e108d]
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-200
              hover:scale-[1.03]
              hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
              active:scale-[0.98]
            "
                    >
                        Email Me
                    </a>

                    <a
                            href="https://www.linkedin.com/in/sagar-nage-6a1a372a4"
                            target="_blank"
                            rel="noopener noreferrer"
                        className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-white/8
              hover:border-white/20
              active:scale-[0.98]
            "
                    >
                        LinkedIn
                    </a>

                    <a
                            href="https://github.com/sagarnage123"
                            target="_blank"
                            rel="noopener noreferrer"
                        className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-white/8
              hover:border-white/20
              active:scale-[0.98]
            "
                    >
                        GitHub
                    </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
    rounded-xl
    border
    border-white/10
    bg-white/5
    px-6
    py-3
    text-sm
    font-medium
    text-white
    transition-all
    duration-200
    hover:bg-white/8
    hover:border-white/20
    active:scale-[0.98]
  "
                        >
                            Resume
                        </a>
                </div>
            </div>
        </FadeIn>
        </Section>
    )
}

export default Contact