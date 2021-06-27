import React from "react";
import styled from "styled-components";
import ServicosCard1 from "./ServicosCard1";

const PropostasContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export default class PropostasDeServicos extends React.Component {
  render() {
    return (
      <PropostasContainer>
        <ServicosCard1
          irParaDetailPageCliente={this.props.irParaDetailPageCliente}
          addCarrinho={this.props.addCarrinho}
        />
      </PropostasContainer>
    );
  }
}
