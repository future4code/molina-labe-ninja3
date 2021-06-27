import React from "react";
import styled from "styled-components";
import HeaderClientes from "./HeaderUsuario/HeaderClientes";
import PropostasDeServicos from "./BodyClientes/PropostasDeServicos";
import FiltroeOrdenamento from "./FiltroeOrdenamento/FiltroeOrdenamento"


const ContainerServicos = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: 500px 300px;
  height: 150vh;
  width: 100vw;
  justify-items: center;
  justify-content: center;
  align-items: center;
 
`;

export default class ClientesHome extends React.Component {
  render() {
    return (
      <ContainerServicos>
        <HeaderClientes />
        <PropostasDeServicos
          irParaDetailPageCliente={this.props.irParaDetailPageCliente}
          addCarrinho={this.props.addCarrinho}
        />
        <FiltroeOrdenamento/>
        
      </ContainerServicos>
    );
  }
}
