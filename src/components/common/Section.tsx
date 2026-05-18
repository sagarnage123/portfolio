import type{ ReactNode } from "react"
import Container from "./Container"

type SectionProps = {
    children: ReactNode
    className?: string
    id?: string
}

function Section({
    children,
    className = "",
    id,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`
                relative
                py-20
                md:py-28
                lg:py-32
                ${className}
                `}
        >
            <Container>
                {children}
            </Container>
            <div
                className="
    absolute
    bottom-0
    left-1/2
    h-px
    w-[85%]
    -translate-x-1/2
    bg-linear-to-r
    from-transparent
    via-white/10
    to-transparent
  "
            />
        </section>
    )
}

export default Section