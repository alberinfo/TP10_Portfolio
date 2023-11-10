import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { PortfolioContext } from "../context/context";
import { Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Home() {
    const navigation = useNavigate();

    const context = useContext(PortfolioContext);

    const { portfolio } = context;

    const irAObra = (obra) => {
        console.log("JOEMAMA", obra);
        navigation("/creaciones", { state: {obra: obra}});
    }

    return (
        <Container style={{marginTop: "1%"}}>
            <Row xs={1} md={3} className="g-4">
                {
                    portfolio.map((element, idx) => (
                        <Col key={idx}>
                            <Card onClick={() => irAObra(element)} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.foto} />
                                <Card.Body style={{display: "flex", flexDirection: "row"}}>
                                    <Card.Title>{element.nombre}</Card.Title>
                                    {element.favorito ? <FavoriteIcon color="error" onClick={(e) => context.eliminarDeFavs(element)} /> : <FavoriteBorderIcon onClick={(e) => context.añadirAFavs(element)} />}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Home;