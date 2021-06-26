import React from "react";
import styled from "styled-components";
import ServicosAutos1 from "./ServicosAutos1";
import FiltroeOrdenamentos from "./FiltroeOrdenamento/FiltroeOrdenamento";

const BodyAutos = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
`;

export default class BodyCardAutos extends React.Component {
  render() {
    return (
      <BodyAutos>
        <FiltroeOrdenamentos />
        <ServicosAutos1
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
      </BodyAutos>
    );
  }
}
