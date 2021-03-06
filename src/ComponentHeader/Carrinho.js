import React from "react";
import styled from "styled-components";
import delete_lixeira from "./delete_lixeira.svg";

const CarrinhoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: none;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  border: 3px solid black;
  border-radius: 20px;
  color: black;
  margin: 5px;
  width: 150px;
  box-shadow: 5px 5px gray;
  justify-items: center;
  justify-content: center;
  align-items: center;
  background-color: white;

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

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 20px;
  width: 100vw;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background-color: lavender;

  button {
    width: 6vw;
    height: 5vh;
    cursor: pointer;
    color: black;
    background-color: white;
    border-radius: 15px;
    border: none;
    position: relative;
    bottom: 40px;
    font-weight: bold;
    font-size: 14px;

    :hover {
      background-color: mediumpurple;
      color: white;
    }
  }
`;

const ValorTotal = styled.p`
  color: black;
`;

export default class Carrinho extends React.Component {
  ValorTotalCompra = (props) => {
    let valorTotal = 0;

    for (let job of props.carrinho) {
      valorTotal += job.price;
    }

    return valorTotal;
  };

  render() {
    return (
      <ContainerCarrinho>
        <button onClick={this.props.irParaClientesHome}>Voltar</button>
        <CarrinhoDiv>
          {this.props.carrinho.map((job) => {
            return (
              <JobCard>
                <p>{job.title}</p>
                <p>R${job.price},00</p>
                <button onClick={() => this.props.RemoverJob(job)}>
                  <img src={delete_lixeira} alt="icone-lixeira" />
                </button>
              </JobCard>
            );
          })}
        </CarrinhoDiv>

        <ValorTotal>
          Valor Total: R${this.ValorTotalCompra(this.props)},00
        </ValorTotal>
      </ContainerCarrinho>
    );
  }
}
