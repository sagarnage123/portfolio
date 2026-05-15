import Section from "../../components/common/Section"
import { motion } from "framer-motion"
import profile from "../../assets/profile.png"
function Hero() {
    return (
        <Section className="min-h-[calc(100vh-120px)] flex items-center">
            <div
                className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
          w-full
        "
            >
               
                <motion.div 
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                className="space-y-6">
                   
                    <div className="space-y-4">
                        <p
                            className="
                text-sm
                md:text-base
                tracking-[0.3em]
                uppercase
                text-[#4F8CFF]
              "
                        >
                            Full Stack Developer
                        </p>

                        <h1
                            className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-semibold
                leading-[1.1]
                tracking-tight
              "
                        >
                            Building scalable products with elegant user experiences.
                        </h1>

                        <p
                            className="
                max-w-2xl
                text-base
                md:text-lg
                leading-8
                text-[#A1A1AA]
              "
                        >
                            MERN stack developer focused on full stack engineering,
                            problem solving, performance, and premium digital
                            experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            className="
                rounded-xl
                bg-[#4F8CFF]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:scale-[1.02]
              "
                        >
                            View Projects
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
                transition
                hover:bg-white/10
              "
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

               
                <div className="flex justify-center lg:justify-end">

                    <motion.div 
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                    }}
                    className="relative">
                        <div
                            className="
      absolute
      inset-0
      rounded-full
      bg-[#4F8CFF]/20
      blur-3xl
    "
                        />

                        <motion.div
                            whileHover={{
                                y: -6,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
      relative
      h-65
      w-65
      md:h-85
      md:w-85
      overflow-hidden
      rounded-4xl
      border
      border-white/10
      bg-linear-to-br
      from-[#111117]
      to-[#16161D]
    "
                        >
                            <img
                                src={profile}
                                alt="Profile"
                                className="
      h-full
      w-full
      object-cover
    "
                            />
                        </motion.div>

                    </motion.div>
                    
                </div>
            </div>
        </Section>
    )
}

export default Hero