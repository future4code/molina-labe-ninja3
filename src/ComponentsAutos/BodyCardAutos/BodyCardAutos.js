import React from "react";
import styled from "styled-components";
import ServicosAutos1 from "./ServicosAutos1";
import ServicosAutos2 from "./ServicosAutos2";

const BodyAutos = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default class BodyCardAutos extends React.Component {
  render() {
    return (
      <BodyAutos>
        <ServicosAutos1 />
        <ServicosAutos2 />
      </BodyAutos>
    );
  }
}
