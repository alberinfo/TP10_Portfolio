import { Container } from "react-bootstrap";
import { a } from "react-router-bootstrap";

function Footer() {
    return (
        <footer style={{position:"absolute", left:0, bottom:0, right:0}} className="text-center text-lg-start bg-white text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <Container className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </Container>
            </section>

            <section className="">
                <Container className="text-center text-md-start mt-5">
                <Container className="row mt-3">
                    <Container className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3 text-secondary"></i>Company name
                    </h6>
                    </Container>

                    <Container className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Products
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">React</a>
                    </p>
                    </Container>

                    <Container className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
                    <p>
                        <i className="fas fa-envelope me-3 text-secondary"></i>
                        info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                    </Container>

                </Container>

                </Container>
            </section>
        </footer>
    )
}

export default Footer;