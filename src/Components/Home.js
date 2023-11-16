import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { PortfolioContext } from "../context/context";
import { Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CreacionCard from "./CreacionCard";

function Home() {
    const navigation = useNavigate();

    const context = useContext(PortfolioContext);

    const { portfolio } = context;

    const irAObra = (obra) => {
        navigation("/creaciones", { state: {obra: obra}});
    }

    return (
        <Container style={{marginTop: "1%"}}>
            <Row xs={1} md={3} className="g-4">
                {portfolio.slice(0,6).map(proyecto => (<Col><CreacionCard obra={proyecto} /></Col>))}
            </Row>
        </Container>
    )
}

export default Home;