import { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { PortfolioContext } from "../context/context";

function DetalleCreacion() {
    const {state} = useLocation();

    const context = useContext(PortfolioContext);

    const proyecto = context.portfolio.find(proyecto => proyecto.id === state.id);

    return (
        <Container style={{display: "flex", flexDirection: "row", alignItems: "center", height: "70vh"}}>
            <Container>
                <h1>{proyecto.nombre}</h1>
                <img src={proyecto.foto}></img>
            </Container>
            <Container>
                <h2>Esta obra representa {proyecto.significado}</h2>
                <h2>Valor: {proyecto.precio}USD</h2>
                <br/>
                <h3>Presentada el {proyecto.fechadecreacion}</h3>
                {proyecto.favorito ? <Button onClick={(e) => context.eliminarDeFavs(proyecto)}>Eliminar de favoritos</Button> : <Button onClick={(e) => context.añadirAFavs(proyecto)}>Añadir a favoritos</Button>}
            </Container>
        </Container>
    );
}

export default DetalleCreacion;