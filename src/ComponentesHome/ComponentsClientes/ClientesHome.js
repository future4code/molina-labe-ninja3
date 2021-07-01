import React from "react";
import styled from "styled-components";
import HeaderClientes from "./HeaderUsuario/HeaderClientes";
import BodyClientes from "./BodyClientes/BodyClientes";

const ContainerServicos = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export default class ClientesHome extends React.Component {
  render() {
    return (
      <ContainerServicos>
        <HeaderClientes
          irParaCardsCategorias={this.props.irParaCardsCategorias}
        />
        <BodyClientes
          irParaDetailPageCliente={this.props.irParaDetailPageCliente}
          addCarrinho={this.props.addCarrinho}
        />
      </ContainerServicos>
    );
  }
}
