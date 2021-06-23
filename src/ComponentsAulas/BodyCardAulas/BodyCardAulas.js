import React from "react";
import styled from "styled-components";
import ServicosCard1 from "./ServicosCard1";
import ServicosCard2 from "./ServicosCard2";

const BodyAulas = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default class BodyCardAulas extends React.Component {
  render() {
    return (
      <BodyAulas>
        <ServicosCard1 />
        <ServicosCard2 />
      </BodyAulas>
    );
  }
}
