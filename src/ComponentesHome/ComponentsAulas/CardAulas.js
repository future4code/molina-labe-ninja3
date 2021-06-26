import React from "react";
import styled from "styled-components";
import HeaderCardAulas from "./HeaderCardAulas/HeaderCardAulas";
import BodyCardAulas from "./BodyCardAulas/BodyCardAulas";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default class CardAulas extends React.Component {
  render() {
    return (
      <CardContainer>
        <HeaderCardAulas
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
        <BodyCardAulas />
      </CardContainer>
    );
  }
}
