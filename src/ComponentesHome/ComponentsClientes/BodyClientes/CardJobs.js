import React from "react";
import styled from "styled-components";
import { converDate } from "../../../utils/convertDate";
import add_carrinho from "./add_carrinho.svg";

const CardServico = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  height: 280px;
  border: 3px solid black;
  border-radius: 20px;
  margin: 5px;
  width: 200px;
  box-shadow: 5px 5px gray;
  justify-items: center;
  justify-content: center;
  align-items: center;

  button {
    width: 150px;
    justify-items: center;
  }
`;

const Add = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-items: center;
  background-color: white;
  cursor: pointer;
  margin-top: 10px;

  img {
    margin-top: 10px;
  }

  :hover {
    background-color: mediumpurple;
  }
`;

const CardJobs = (props) => {
  return (
    <CardServico>
      <h3>{props.job.title}</h3>
      <p>
        <b>Preço:</b> R${props.job.price.toFixed(2)}
      </p>
      <p>
        <b>Prazo:</b> {converDate(props.job.dueDate)}
      </p>
      <button onClick={() => props.irParaDetailPageCliente(props.job.id)}>
        Ver detalhes
      </button>
      <Add onClick={() => props.addCarrinho(props.job)}>
        <img src={add_carrinho} alt="icone-addcarrinho" />
      </Add>
    </CardServico>
  );
};

export default CardJobs;
