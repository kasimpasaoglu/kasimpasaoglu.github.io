import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/style/ContactLinks.css';

export default function ContactLinks() {
    return (
        <div className="d-flex gap-3 justify-content-center mb-4">
            <a
                className="icon-link-hover text-dark contact-link"
                href="https://wa.me/905433010531"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
            <a
                className="icon-link-hover text-dark contact-link"
                href="https://github.com/kasimpasaoglu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <i className="bi bi-github"></i>
            </a>
            <a
                className="icon-link-hover text-dark contact-link"
                href="https://www.instagram.com/kasimpasaoglu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <i className="bi bi-instagram"></i>
            </a>
        </div>
    );
}
