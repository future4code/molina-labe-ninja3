import React from "react";
import styled from "styled-components";
import ServicosConsultoria1 from "./ServicosConsultoria1";
import ServicosConsultoria2 from "./ServicosConsultoria2";

const BodyConsultoria = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default class BodyCardConsultoria extends React.Component {
  render() {
    return (
      <BodyConsultoria>
        <ServicosConsultoria1 />
        <ServicosConsultoria2 />
      </BodyConsultoria>
    );
  }
}
