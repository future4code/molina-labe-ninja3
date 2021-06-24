import React from "react";
import styled from "styled-components";

const HeaderDesign = styled.div`
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


export default class HeaderCardDesign extends React.Component {
  render() {
    return (
      <HeaderDesign>
        <Button onClick={this.props.irParaCardsCategorias}>HOME</Button>
        <h1>Precisando de Profissionais em Design e Tecnologia?</h1>
        <h2>
          Aqui você encontra milhares de profissionais avaliados por clientes,
          permitindo você negociar apenas com os melhores.
        </h2>
      </HeaderDesign>
    );
  }
}
