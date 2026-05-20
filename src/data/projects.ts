import devmateImage from "../assets/projects/devmate.png"
import yourvoiceImage from "../assets/projects/yourvoice.png"
import portfolioImage from "../assets/projects/portfolio.png"
export const projects = [
    {
        title: "DevMate",
        type: "Full Stack",
        image: devmateImage,
        description:
            "Productivity platform built to simplify client, project, task, and invoice management for freelancers, with focus on scalable architecture, structured workflows, and polished user experience.",
        tech: ["React","Tailwind","Framer Motion", "TypeScript","express", "Node.js", "MongoDB",],
    },
    {
        title: "YourVoice",
        type: "Full Stack",
        image: yourvoiceImage,
        description:
            "Privacy-focused communication platform designed to help students share concerns and feedback anonymously through secure authentication, protected user flows,RBAC, moderation systems, and scalable full stack architecture.",
        tech: ["React", "Tailwind", "TypeScript", "express", "Node.js", "MongoDB",],
    },

    {
        title: "Portfolio",
        type: "Frontend",
        image: portfolioImage,
        description:
            "Personal portfolio focused on responsive design, smooth interactions, reusable UI architecture, and creating a polished experience that reflects strong frontend engineering standards.",
        tech: ["React", "Tailwind", "Framer Motion"],
    },

]