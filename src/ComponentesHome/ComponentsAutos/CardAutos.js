import React from "react";
import styled from "styled-components";
import HeaderCardAutos from "./HeaderCardAutos/HeaderCardAutos";
import BodyCardAutos from "./BodyCardAutos/BodyCardAutos";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default class CardAutos extends React.Component {
  render() {
    return (
      <CardContainer>
        <BodyCardAutos
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
      </CardContainer>
    );
  }
}
