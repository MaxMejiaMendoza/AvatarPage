    import styled from "styled-components";
import { Headercine } from "../componentes/Cinemoleculas/headercine";
import { Main } from "../componentes/moleculas/mainPage";
import { Pelissection } from "../componentes/Cinemoleculas/Pelissection";

    export function Reservapage() {
      return (
        <Container>
          <Headercine/>
          <Main/>
          <Pelissection/>
        </Container>
      );
    }
    const Container = styled.div`


h1{
    color: #000;
}

    `;
    