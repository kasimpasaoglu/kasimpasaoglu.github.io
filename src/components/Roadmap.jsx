import hero from "../assets/data/roadmaphero.json"
import List from "./List"

export default function Roadmap() {
    return (<>
    <article className="container-md card my-5 p-3 shadow bg-light-subtle bg-gradient">
        <h2 className="text-center p-3 fw-bold">{hero.title}</h2>
        <p className="fs-5 p-3">{hero.text}</p>
        <List />
        <img id="roadmap" src="src/assets/images/roadmap.png" alt="roadmap" className="img-thumbnail my-3 p-5 shadow"/>
    </article>
    </>)
}