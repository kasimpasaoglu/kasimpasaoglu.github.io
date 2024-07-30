import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-sm">
                    <Link className="navbar-brand" to="/">Kasim Pasaoglu</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/learningexercises">Learning Exercises</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}