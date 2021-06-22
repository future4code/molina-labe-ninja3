import React from "react";
import styled from "styled-components";

const HeaderAulas = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  align-items: center;
`;

export default class HeaderCardAulas extends React.Component {
  render() {
    return (
      <HeaderAulas>
        <h1>Precisando de professores?</h1>
        <h2>Temos os melhores profissionais, mais bem avaliados!!</h2>
      </HeaderAulas>
    );
  }
}
