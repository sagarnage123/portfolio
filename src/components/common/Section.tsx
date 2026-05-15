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
        py-20
        md:py-28
        lg:py-32
        ${className}
      `}
        >
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Section