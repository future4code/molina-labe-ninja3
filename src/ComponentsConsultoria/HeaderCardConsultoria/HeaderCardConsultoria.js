import React from "react";
import styled from "styled-components";

const HeaderConsultoria = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  align-items: center;
`;

export default class HeaderCardConsultoria extends React.Component {
  render() {
    return (
      <HeaderConsultoria>
        <button onClick={this.props.irParaCardsCategorias}>HOME</button>
        <h1>Precisando de Serviços para Automóveis?</h1>
        <h2>
          Todos os profissionais são avaliados por clientes, e você só negocia
          com os melhores!
        </h2>
      </HeaderConsultoria>
    );
  }
}
