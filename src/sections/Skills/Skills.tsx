import Section from "../../components/common/Section"
import FadeIn from "../../components/animations/FadeIn"
function Skills() {
    return (
        <Section id="skills">
            <FadeIn>
                <div className="space-y-4 text-center">
                    <p
                        className="
                text-sm
                uppercase
            tracking-[0.3em]
            text-[#8B5CF6]
          "
                >
                    Skills
                </p>

                <h2
                    className="
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
          "
                >
                    Technologies & Engineering
                </h2>

                <p
                    className="
            mx-auto
            max-w-2xl
            leading-8
            text-[#A1A1AA]
          "
                >
                    Focused on full stack engineering, scalable systems,
                    frontend architecture, backend development, and modern
                    software tooling.
                </p>
            </div>
            <div
                className="
    mt-16
    grid
    grid-cols-1
    gap-6
    md:grid-cols-2
  "
            >
                {[
                    {
                        title: "Frontend Engineering",
                        skills: [
                            "React",
                            "TypeScript",
                            "JavaScript",
                            "Tailwind CSS",
                            "Framer Motion",
                        ],
                    },

                    {
                        title: "Backend Engineering",
                        skills: [
                            "Node.js",
                            "Express.js",
                            "REST APIs",
                            "Authentication",
                        ],
                    },

                    {
                        title: "Databases & Tools",
                        skills: [
                            "MongoDB",
                            "Mongoose",
                            "Git",
                            "Postman",
                        ],
                    },

                    {
                        title: "Problem Solving",
                        skills: [
                            "Data Structures",
                            "Algorithms",
                            "Optimization",
                            "Competitive Programming",
                        ],
                    },
                ].map((category) => (
                    <div
                        key={category.title}
                        className="
        rounded-3xl
        border
        border-white/10
        bg-[#111117]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
      "
                    >
                        <h3
                            className="
          text-2xl
          font-semibold
          tracking-tight
        "
                        >
                            {category.title}
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="
              rounded-full
              bg-white/5
              px-4
              py-2
              text-sm
              text-[#A1A1AA]
            "
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </FadeIn>
        </Section>
    )
}

export default Skills