import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PortfolioContext } from "../context/context";
import CreacionCard from "./CreacionCard";
import { useNavigate } from "react-router-dom";

function Favs() {
    const context = useContext(PortfolioContext);

    const { portfolio } = context;

    return (
        <Container style={{marginTop: "1%"}}>
            <Row xs={1} md={3} className="g-4">
                {portfolio.filter(proyecto => proyecto.favorito === true).map(proyecto => (<Col><CreacionCard obra={proyecto} /></Col>))}
            </Row>
        </Container>
    )
}

export default Favs;