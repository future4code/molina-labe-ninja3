import React from "react";
import styled from "styled-components";

const CarrinhoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  height: 50vh;

  button {
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;
    background-color: blueviolet;
    position: relative;
    top: 25px;
  }
`;
const ContainerNone = styled.div`
  display: none;
`;

const ContainerCarrinho = styled.div`
  background-color: mediumpurple;
  color: white;
  margin-right: 5px;
  border-radius: 20px;

  button {
    width: 5vw;
    cursor: pointer;
    color:black;
    background-color: white;
    border-radius: 15px;
    border: none;
    
  }
`;

// const Imagem = styled.img`
//   width: 130px;
// `;

// const BotaoRemover = styled.div`
//   button {
//     cursor: pointer;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     color: white;
//     background-color: blueviolet;
//   }
// `;

export default class Carrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        {this.props.abrirCarrinho === false ? (
          <ContainerNone></ContainerNone>
        ) : (
          <CarrinhoDiv>
            <p>serviço.nome</p>
            <p>R$0,0</p>
            <button>Remover Serviço</button>
            <p>Valor Total: R$0,0</p>
          </CarrinhoDiv>
        )}
      </ContainerCarrinho>
    );
  }
}
