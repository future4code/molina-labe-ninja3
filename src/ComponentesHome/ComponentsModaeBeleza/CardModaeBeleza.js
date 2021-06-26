import React from "react";
import styled from "styled-components";
import HeaderCardModaeBeleza from "./HeaderCardModaeBeleza/HeaderCardModaeBeleza";
import BodyCardModaeBeleza from "./BodyCardModaeBeleza/BodyCardModaeBeleza";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  
`;

export default class CardModaeBeleza extends React.Component {
  render() {
    return (
      <CardContainer>
        <HeaderCardModaeBeleza
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
        <BodyCardModaeBeleza />
      </CardContainer>
    );
  }
}
