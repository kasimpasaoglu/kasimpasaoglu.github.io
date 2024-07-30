import { useEffect, useState } from "react"
import projectsData from "../assets/data/projects.json"
import { Link } from "react-router-dom"

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (<>
        <article className="container-md card shadow my-5 bg-light-subtle bg-gradient">
            <div className="row justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 my-3">
                        <div className="card h-100 shadow rounded-4">
                            <img src={project.img} alt={project.title} className="rounded-top-4"/>
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <Link to={project.link} target="_blank" className="btn btn-primary">Go To Page</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    </>)
}