import React from "react";
import styled from "styled-components";
import ServicosCard1 from "./ServicosCard1";


const Propostas = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default class PropostasDeServicos extends React.Component {
  render() {
    return (
      <Propostas>
        <ServicosCard1 
        irParaDetailPageCliente={this.props.irParaDetailPageCliente} 
        addCarrinho={this.props.addCarrinho}
        />
      </Propostas>
    );
  }
}
