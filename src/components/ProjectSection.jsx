import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Trans, useTranslation } from "react-i18next"

const projects = [
    {
        id: 1,
        title: "Chat in HTML",
        description: "This is a project for my college class, where I developed a real-time chat application using WebSockets.",
        image: "/projects/Chat_in_HTML/chatPrint.png",
        tags: ["HTML", "CSS", "JavaScript", "WebSockets"],
        demoUrl: "#",
        gitHubUrl: "https://github.com/felipexd1945/project-from-college_APS"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "This is my personal portfolio website showcasing my projects and skills.",
        image: "/projects/PortfolioWebSite/portfolioPrint.png",
        tags: ["React", "Html", "CSS", "Vite"],
        demoUrl: "#",
        gitHubUrl: "https://github.com/felipexd1945/MyPortfolio"
    }
    ,
    // {
    //     id: 3,
    //     title: "Project Three",
    //     description: "This is a brief description of Project Three.",
    //     image: "https://picsum.photos/300",
    //     tags: ["Angular", "Express"],
    //     demoUrl: "#",
    //     gitHubUrl: "#"
    // }
];

export const ProjectSection = () => { 

    const { t } = useTranslation()

    return (

        <section id="projects" className="py-24 px-4 relative" >

            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <Trans i18nKey="projects.title">
                        My <span className="text-primary">Projects</span>
                    </Trans>
                </h2>
                
                <p className="text-center text-muted-foreground mb-12-foreground mb-12 max-w-2xl mx-auto">
                    {t("projects.description")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, key) => (

                        <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"> 
                        
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground"> {tag}</span>
                                        ))}
                                </div>
                            
                            
                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">

                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>

                                    <a href={project.gitHubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>

                                </div>

                            </div>

                        </div>
                    </div>

                    ))}

                </div>

                <div className="text-center mt-12">

                    <a href="https://github.com/felipexd1945" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        {t("projects.githubButton")} <ArrowRight size={16}/>
                    </a>

                </div>

            </div>

        </section>
       
    )
}