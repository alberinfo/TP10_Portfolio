import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    const navigate = useNavigate()

    const handleContacto = () => {
        navigate("/sobremi");
    }

    return (
        <footer style={{flex: "0 0 50px", marginTop: "auto", paddingTop: "0.5rem", paddingBottom: "0.5rem"}}>
            <Container style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", marginBottom: "auto", width: "80%"}}>
                <Container style={{display: "flex", alignItems: "center"}}>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                    <img
                    alt="logo"
                    src={"https://cdn-icons-png.flaticon.com/512/686/686165.png"}
                    width="30px"
                    />
                    <span className="ms-4 h5 mb-0 font-weight-bold">44 Años de pasion</span>
                </a>
                </Container>
                <Container>
                <small className="ms-2">&copy; Alberto Cuch, Eitan Finkelstein, 2023.</small>
                </Container>
                <Container style={{display: "flex"}}>
                <Button flat color="dark" className="p-2">
                    <FacebookIcon />
                </Button>
                <Button flat color="dark" className="mx-3 p-2">
                    <TwitterIcon />
                </Button>
                <Button flat color="dark" className="p-2">
                    <InstagramIcon />
                </Button>
                </Container>
            </Container>
        </footer>
    )
}

export default Footer;