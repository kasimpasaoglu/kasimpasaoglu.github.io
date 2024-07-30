export default function Form() {
    return (
        <form className="d-flex gap-2 mx-auto card shadow p-3 text-center mb-3 bg-light-subtle bg-gradient" action="https://formsubmit.co/kasimpasaoglu@windowslive.com" method="post">
            <h3 className="mb-5 text-center">Send an e-Mail👇</h3>
            <label className="mb-0 form-label" htmlFor="name">Name:</label><br />
            <input className="form-control" type="text" name="name" id="name" placeholder="Name" /><br />
            <label className="mb-0 form-label" htmlFor="email">Email:</label><br />
            <input className="form-control" type="email" name="email" id="email" placeholder="name@example.com" /><br />
            <label className="mb-0 form-label" htmlFor="message">Message:</label><br />
            <textarea className="form-control" name="message" id="message" rows="3" cols="50" placeholder="Your message..."></textarea><br />
            <input className="btn btn-dark" type="submit" value="Submit" />
        </form>
    )
}