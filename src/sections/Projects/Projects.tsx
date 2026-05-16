import Section from "../../components/common/Section"

function Projects() {
    return (
        <Section id="projects">
            <div className="space-y-4">
                <p
                    className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#8B5CF6]
          "
                >
                    Projects
                </p>

                <h2
                    className="
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
          "
                >
                    Selected Work
                </h2>

                <p
                    className="
            max-w-2xl
            text-[#A1A1AA]
            leading-8
          "
                >
                    A collection of projects focused on full stack
                    engineering, scalability, performance, and polished user
                    experiences.
                </p>
            </div>
        </Section>
    )
}

export default Projects