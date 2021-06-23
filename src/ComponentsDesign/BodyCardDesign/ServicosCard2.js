import React from "react";
import styled from "styled-components";

const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  button {
    cursor: pointer;
  }
`;

const ImagemAula = styled.img`
  display: flex;
  width: 60%;
  height: 50%;
`;

export default class ServicosCard2 extends React.Component {
  render() {
    return (
      <ServicosContainer>
        <h1>Desenhos e Projetos em AutoCAD com Autodesk Studio 3D Max</h1>
        <a>Preço</a>
        <a>Método de pagamento</a>
        <a>Prazo</a>
        <button>Saiba mais</button>
        <button>Contratar</button>
      </ServicosContainer>
    );
  }
}
