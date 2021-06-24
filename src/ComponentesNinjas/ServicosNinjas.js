import React from "react";
import styled from "styled-components";

const ContainerServicos = styled.div`
  display: flex;
  flex-direction: column ;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 20vw;

  button {
    background-color: lavender;
    padding: 14px 20px;
    color: black;
    font-size: 15px;
    text-decoration: none;
    border-radius: 20px ;
    border: none;
    cursor: pointer;
  
   :hover {
    background-color: mediumpurple;
    color: white;
    }
  } 
`;


export default class ServicosNinjas extends React.Component {
  render() {
    return (
      <ContainerServicos>
        <h2>Serviços Cadastrados</h2>
        <button>Deletar Serviço</button>
        <button onClick={this.props.irParaCadastroNinjas}>
          Voltar para Cadastros
        </button>
      </ContainerServicos>
    );
  }
}
