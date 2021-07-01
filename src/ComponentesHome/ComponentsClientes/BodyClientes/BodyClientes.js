import React from "react";
import styled from "styled-components";
import PropostasDeServicos from "./PropostasDeServicos";

const ContainerServicos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export default class BodyClientes extends React.Component {
  render() {
    return (
      <ContainerServicos>
        <PropostasDeServicos
          irParaDetailPageCliente={this.props.irParaDetailPageCliente}
          addCarrinho={this.props.addCarrinho}
        />
      </ContainerServicos>
    );
  }
}
