import React from "react";
import styled from "styled-components";
import imagemAulaProgramacao from "../ImagensCardAulas/AulaProgramacao.png";

const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const ImagemAula = styled.img`
  display: flex;
  width: 80%;
  height: 50%;
`;

export default class ServicosCard extends React.Component {
  render() {
    return (
      <ServicosContainer>
        <ImagemAula src={imagemAulaProgramacao} />
        <h1>Aula de programação</h1>
        <a>Preço</a>
        <a>Método de pagamento</a>
        <a>Prazo</a>
        <button>Saiba mais</button>
        <button>Contratar</button>
      </ServicosContainer>
    );
  }
}
