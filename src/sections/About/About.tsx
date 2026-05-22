import Section from "../../components/common/Section"
import FadeIn from "../../components/animations/FadeIn"
function About() {
    return (
        <Section id="about">
            <FadeIn>
                <div
                    className="
          mx-auto
          max-w-4xl
          text-center
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
                    About
                </p>

                <h2
                    className="
            mt-4
            text-2xl
            md:text-3xl
            lg:text-4xl
            font-semibold
            tracking-tight
          "
                >
                        Focused on scalable software, problem solving, and thoughtful user experiences.
                </h2>

                <p
                    className="
            mt-8
            text-base
            leading-8
            text-[#A1A1AA]
            md:text-lg
          "
                >
                        Interested in solving meaningful problems through scalable software, clean engineering, and thoughtful user experiences. Strongly focused on full stack development, backend systems, and strengthening engineering fundamentals through consistent problem solving and competitive programming.
                    <br />
                    <br />

                    Currently pursuing B.E. in Information Technology at D.Y. Patil College of Engineering,Akurdi with a 9.56 CGPA while actively focusing on full stack development and software engineering.
                </p>
            </div>
        </FadeIn>
        </Section>
    )
}

export default About