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
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
          "
                >
                    Full stack developer focused on building scalable and
                    polished digital experiences.
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
                    I enjoy building full stack applications that combine
                    clean engineering, scalable architecture, and refined
                    user experiences. My interests include backend systems,
                    problem solving, performance optimization, and creating
                    products that feel intuitive and polished across every
                    screen size.
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