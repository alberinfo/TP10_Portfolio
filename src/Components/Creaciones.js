import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Creaciones() {
    const {state} = useLocation();

    return (
    <Container>
        <h1>{state.obra.nombre}</h1>
        <img src={state.obra.foto}></img>
    </Container>
    );
}

export default Creaciones;