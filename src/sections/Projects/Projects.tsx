import { motion } from "framer-motion"
import Section from "../../components/common/Section"
import { projects } from "../../data/projects"
function Projects() {
    const containerVariants = {
        hidden: {},

        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }
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
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="
    mt-16
    grid
    grid-cols-1
    gap-8
    justify-items-center
    md:grid-cols-2
    lg:grid-cols-2
    xl:grid-cols-3
  "
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariants}
                        
                        className="
      group
      max-w-105
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#111117]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-white/20
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
                    >
                        <div className="overflow-hidden">
                            <div
                                className="
          h-45
          md:h-55
          bg-linear-to-br
          from-[#1A1A24]
          to-[#111117]
          transition-transform
          duration-500
          group-hover:scale-105
        "
                            />
                        </div>

                        <div className="space-y-3 p-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <span
                                    className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1
            text-xs
            text-[#A1A1AA]
          "
                                >
                                    {project.type}
                                </span>
                            </div>

                            <p className="leading-6 text-[#A1A1AA]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <div
                                        key={tech}
                                        className="
              rounded-full
              bg-white/5
              px-3
              py-1
              text-xs
              text-[#A1A1AA]
            "
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <button
                                    className="
            rounded-xl
            bg-linear-to-br
          from-[#8B5CF6]
          to-[#3e108d]
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition-all
            duration-200
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]
            active:scale-[0.98]
          "
                                >
                                    Live Demo
                                </button>

                                <button
                                    className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-2
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
                    </motion.div>

                ))}
            </motion.div>
        </Section>
    )
}

export default Projects