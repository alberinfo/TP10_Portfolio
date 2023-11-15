import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Creaciones() {
    const {state} = useLocation();

    return (
    <Container style={{display: "flex", flexDirection: "row", alignItems: "center", height: "70vh"}}>
        <Container>
            <h1>{state.obra.nombre}</h1>
            <img src={state.obra.foto}></img>
        </Container>
        <Container>
            <h2>Esta obra representa {state.obra.significado}</h2>
            <h2>Valor: {state.obra.precio}USD</h2>
            <br/>
            <h3>Presentada el {state.obra.fechadecreacion}</h3>
        </Container>
    </Container>
    );
}

export default Creaciones;