import React from "react";
import styled from "styled-components";

const HeCardModaeBeleza = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
  
  
  h2 {
    text-align: center;
    width: 900px;
    height: 90px;
    
    
  }
`;

export default class HeaderCardModaeBeleza extends React.Component {
  render() {
    return (
      <HeCardModaeBeleza>
        <button onClick={this.props.irParaCardsCategorias}>HOME</button>
        <h1>Precisando de Profissionais em Moda e Beleza?</h1>
        <h2>
          Pois aqui você acaba de encontrar milhares de profissionais avaliados por clientes,
          permitindo você negociar apenas com os melhores.
        </h2>
        
      </HeCardModaeBeleza>
    );
  }
}
