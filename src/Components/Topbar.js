import { Badge } from '@mui/base';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { PortfolioContext } from '../context/context';

function Topbar() {
    const navigation = useNavigate();

    const context = useContext(PortfolioContext);
    const favs = context.portfolio.filter(proyecto => proyecto.favorito === true);

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
                            <Nav.Link active={true} aria-current="page" href="#" onClick={() => navigation("/home")}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigation("/Proyectos")}>Todos los proyectos</Nav.Link>
                            <Nav.Link onClick={() => navigation("/favs")}>
                                <Badge showZero={true} badgeContent={favs.length} color="primary">
                                    <FavoriteIcon color="error" />
                                </Badge>
                            </Nav.Link> 
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );
}

export default Topbar;