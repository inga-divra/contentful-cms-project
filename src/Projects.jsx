import { useFetchProjects } from "./fetchProjects"

const Projects = () => {
    const { loading, projects } = useFetchProjects()

    if (loading) {
        return (
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        )
    }

    return (
        <section className="projects">
            <div className="title">
                <h2>projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                {projects.map((project) => {
                    const { id, img, url, title } = project
                    return <a
                        className="project"
                        key={id}
                        href={url}
                        target="blank"
                        rel="noreferrer">
                        <img className="img" src={img} alt={title} />
                        <h5>{title}</h5>
                    </a>
                })}
            </div>
        </section>
    )
}

export default Projects