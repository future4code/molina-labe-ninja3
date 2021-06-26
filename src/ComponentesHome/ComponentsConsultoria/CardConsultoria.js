import React from "react";
import styled from "styled-components";
import HeaderCardConsultoria from "./HeaderCardConsultoria/HeaderCardConsultoria";
import BodyCardConsultoria from "./BodyCardConsultoria/BodyCardConsultoria";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default class CardConsultoria extends React.Component {
  render() {
    return (
      <CardContainer>
        <HeaderCardConsultoria
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
        <BodyCardConsultoria />
      </CardContainer>
    );
  }
}
