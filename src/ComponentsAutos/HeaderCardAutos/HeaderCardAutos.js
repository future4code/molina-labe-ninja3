import React from "react";
import styled from "styled-components";

const HeaderAutos = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  padding: 10px;
  justify-content: center;
  align-items: center;
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

export default class HeaderCardAutos extends React.Component {
  render() {
    return (
      <HeaderAutos>
        <Button onClick={this.props.irParaCardsCategorias}>HOME</Button>
        <h1>Precisando de Serviços para Automóveis?</h1>
        <h2>
          Todos os profissionais são avaliados por clientes, e você só negocia
          com os melhores!
        </h2>
      </HeaderAutos>
    );
  }
}
