import React from "react";
import styled from "styled-components";

const HeaderAulas = styled.div`
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

export default class HeaderCardAulas extends React.Component {
  render() {
    return (
      <HeaderAulas>
        <Button onClick={this.props.irParaCardsCategorias}>HOME</Button>
        <h1>Precisando de professores?</h1>
        <h2>Temos os melhores profissionais, mais bem avaliados!!</h2>
      </HeaderAulas>
    );
  }
}
