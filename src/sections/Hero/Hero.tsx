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
                    className="
  space-y-6
  text-center
  lg:text-left
  flex
  flex-col
  items-center
  lg:items-start
" >
                   
                    <div className="space-y-4">
                        <p
                            className="
                text-sm
                md:text-base
                tracking-[0.3em]
                uppercase
                text-[#8B5CF6]
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
                mx-auto
                lg:mx-0
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

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <button
                            className="
                rounded-xl
                bg-[#8a5cf6e2]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
                active:scale-[0.98]
              "
                            onClick={() => {
                                document
                                    .querySelector("#projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }}
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
                hover:bg-white/20
               active:scale-[0.98]
              "
                            onClick={() => {
                                document
                                    .querySelector("#contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            Contact Me
                        </button>
                    </div>
                    <div
                        className="
    flex
    flex-wrap
    items-center
    justify-center
    gap-6
    pt-4
    text-sm
    text-[#71717A]
    lg:justify-start
  "
                    >
                        <div>
                            <span className="font-semibold text-white">
                                800+
                            </span>{" "}
                            Problems Solved
                        </div>
                        <div>
                            <span className="font-semibold text-white">
                                Knight
                            </span>{" "}
                            (2091 rated) @LeetCode
                        </div>


                        <div>
                            <span className="font-semibold text-white">
                                Full Stack
                            </span>{" "}
                            Engineering(MERN)
                        </div>
                    </div>
                </motion.div>

               
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
                 className="flex justify-center lg:justify-end">

                    <motion.div 
                   
                    className="relative">
                        <div
                            className="
                                absolute
                                -inset-6
                                rounded-full
                                bg-[#8B5CF6]/25
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
      z-10
      md:h-80
      md:w-80
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
                            <div
                                className="
    absolute
    inset-0
    bg-linear-to-t
    from-black/40
    via-transparent
    to-transparent
  "
                            />
                        </motion.div>

                    </motion.div>
                    
                </motion.div>
            </div>
        </Section>
    )
}

export default Hero