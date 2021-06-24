import React from "react";
import styled from "styled-components";

const HeaderDesign = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: red;

  h2 {
    text-align: center;
    width: 900px;
    height: 90px;
    
    
  }
`;

export default class HeaderCardDesign extends React.Component {
  render() {
    return (
      <HeaderDesign>
        <button onClick={this.props.irParaCardsCategorias}>HOME</button>
        <h1>Precisando de Profissionais em Design e Tecnologia?</h1>
        <h2>
          Aqui você encontra milhares de profissionais avaliados por clientes,
          permitindo você negociar apenas com os melhores.
        </h2>
      </HeaderDesign>
    );
  }
}
