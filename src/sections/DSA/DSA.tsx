import Section from "../../components/common/Section"
import heatmap from "../../assets/leetcode-heatmap.png.png"
import rating from "../../assets/leetcode-rating.png.png"
import FadeIn from "../../components/animations/FadeIn"
function DSA() {
    return (
        <Section id="dsa">
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
                    Problem Solving
                </p>

                <h2
                    className="
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
          "
                >
                    DSA & Competitive Programming
                </h2>

                <p
                    className="
            mx-auto
            max-w-2xl
            leading-8
            text-[#A1A1AA]
          "
                >
                        Focused on strengthening analytical thinking and engineering fundamentals through consistent problem solving, algorithms, data structures, and competitive programming practice.
                </p>
            </div>
            <div
                className="
    mt-16
    grid
    grid-cols-2
    gap-6
    sm:grid-cols-2
    lg:grid-cols-4
  "
            >
                {[
                    {
                        value: "2092 Rating",
                        label: "Knight @ LeetCode",
                        link: "https://leetcode.com/u/sagarnage/",
                    },

                    {
                        value: "Pupil",
                        label: "@Codeforces (1275 Rated)",
                        link: "https://codeforces.com/profile/Sagarnage",
                    },

                    {
                        value: "800+",
                        label: "Problems Solved",
                    },


                    {
                        value: "Top 2%",
                        label: "Globally on LeetCode",
                    },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="
        rounded-3xl
        border
        border-white/10
        bg-[#111117]
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]
      "
                    >
                        <h3
                            className="
                            text-2xl
          lg:text-4xl
          md:text-3xl
          font-semibold
          tracking-tight
          text-white
        "
                        >
                            {item.value}
                        </h3>

                        <p
                            className="
          mt-3
          text-sm
          text-[#A1A1AA]
        "
                        >
                            {item.label}
                        </p>
                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" mt-4
                                        inline-flex
                                        items-center
                                        text-sm
                                        text-[#8B5CF6]
                                        transition-colors
                                        hover:text-white"
                            >
                                View Profile
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <div
                className="
    mt-16
    grid
    grid-cols-1
    gap-8
    lg:grid-cols-2
  "
            >
                <div
                    className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#111117]
      p-4
    "
                >
                    <img
                        src={rating}
                        alt="LeetCode Rating"
                        className="
        w-full
        rounded-2xl
        object-cover
      "
                    />
                </div>

                <div
                    className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#111117]
      p-4
    "
                >
                    <img
                        src={heatmap}
                        alt="LeetCode Heatmap"
                        className="
        w-full
        rounded-2xl
        object-cover
      "
                    />
                </div>
            </div>
        </FadeIn>
        </Section>
    )
}

export default DSA