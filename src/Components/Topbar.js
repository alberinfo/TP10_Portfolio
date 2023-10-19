import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Topbar() {
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Container fluid>
                
                <Navbar.Brand href="#">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Button bsPrefix='navbar-toggler'
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i className="fas fa-bars"></i>
                        </Button>
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav.Link active={true} aria-current="page" href="#">Home</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );
}

export default Topbar;