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
const Button =styled.button`
  background-color: white;
  padding: 14px 20px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: mediumpurple;
    color: white;
  }
`


export default class HeaderCardModaeBeleza extends React.Component {
  render() {
    return (
      <HeCardModaeBeleza>
        <Button onClick={this.props.irParaCardsCategorias}>HOME</Button>
        <h1>Precisando de Profissionais em Moda e Beleza?</h1>
        <h2>
          Pois aqui você acaba de encontrar milhares de profissionais avaliados por clientes,
          permitindo você negociar apenas com os melhores.
        </h2>
        
      </HeCardModaeBeleza>
    );
  }
}
