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
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
          "
                >
                    Let’s build something meaningful together.
                </h2>

                <p
                    className="
            mx-auto
            mt-6
            max-w-2xl
            leading-8
            text-[#A1A1AA]
          "
                >
                    Open to internships, entry-level opportunities,
                    collaborations, and software engineering roles.
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
                    <button
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
                    </button>

                    <button
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
                    </button>

                    <button
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
                    </button>
                </div>
            </div>
        </FadeIn>
        </Section>
    )
}

export default Contact