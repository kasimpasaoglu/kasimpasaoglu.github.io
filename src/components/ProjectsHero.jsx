import hero from "../assets/data/projectshero.json"

export default function ProjectsHero () {
    return (<>
    <article className="container-md card mt-5 p-5 shadow bg-light-subtle bg-gradient">
        <h2 className="text-center p-3 fw-bold">{hero.title}</h2>
        <p className="fs-5 mb-4">{hero.text1}</p>
        <p className="fs-5">{hero.text2}</p>
        </article> 
    </>)
}