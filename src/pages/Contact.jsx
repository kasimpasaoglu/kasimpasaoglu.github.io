import Form from "../components/Form";
import hero from "../assets/data/formhero.json";
import ContactLinks from "../components/ContactLinks";

export default function Contact() {
    return (<>
        <section className="container-md card my-5 p-3 shadow">
            <h2 className="text-center p-3 fw-bold m-4">{hero.title}</h2>
            <article className="p-4 card shadow mb-4">
                <p className="px-3 pt-2">{hero.text}</p>
            </article>
            <ContactLinks />
            <Form />
        </section>
    </>)
}