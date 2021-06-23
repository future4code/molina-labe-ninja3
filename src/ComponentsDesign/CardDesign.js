import React from "react";
import styled from "styled-components";
import HeaderCardDesign from "./HeaderCardDesign/HeaderCardDesign";
import BodyCardDesign from "./BodyCardDesign/BodyCardDesign";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default class CardDesign extends React.Component {
  render() {
    return (
      <CardContainer>
        <HeaderCardDesign
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
        <BodyCardDesign />
      </CardContainer>
    );
  }
}
