import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { PortfolioContext } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    const context = useContext(PortfolioContext);

    const portfolio = context;

    const irAObra = (obra) => {
        //navegar
    }

    return (
        <Container style={{marginTop: "1%"}}>
            <Row xs={1} md={3} className="g-4">
                {
                    portfolio.map((element, idx) => (
                        <Col key={idx}>
                            <Card onClick={() => irAObra(element)} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.foto} />
                                <Card.Body>
                                    <Card.Title>{element.nombre}</Card.Title>
                                    <FontAwesomeIcon icon="fa-thin fa-heart" />
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