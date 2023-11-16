import { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PortfolioContext } from "../context/context";

function CreacionCard({obra}) {
    const navigation = useNavigate();

    const context = useContext(PortfolioContext);

    const irAObra = (obra) => {
        console.log("irAObra", obra);
        navigation("/DetalleCreacion", { state: {id: obra.id}});
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={obra.foto} />
            <Card.Body style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Container>
                    <Card.Title>{obra.nombre}</Card.Title>
                    <Button onClick={() => irAObra(obra)}>Ver detalle</Button>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CreacionCard;