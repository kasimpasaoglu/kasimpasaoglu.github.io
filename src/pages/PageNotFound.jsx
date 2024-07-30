import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (<>
    <div className="d-flex text-center flex-column m-5 p-5">
    <h1 className="p-5 m-5">Page not found <i className="bi bi-bug"></i></h1>
    <Link to="/" className="btn btn-info p-5 m-5 fs-1">Click here to go HomePage</Link>
    </div>
    </>)
}