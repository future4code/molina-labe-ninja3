import React from "react";
import styled from "styled-components";
import { converDate } from "../utils/convertDate";

const CardServico = styled.div`
display: flex;
  flex-direction: column;
  height: 290px;
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

const CardJob = (props) => {
  return (
    <CardServico>
      <h3>{props.job.title}</h3>
      <p>
        <b>Preço:</b> R${props.job.price.toFixed(2)}
      </p>
      <p>
        <b>Prazo:</b> {converDate(props.job.dueDate)}
      </p>
      <button onClick={() => props.irParaDetailPage(props.job.id)}>
        Ver detalhes
      </button>
      <button onClick={() => props.deleteJob(props.job.id)}>Deletar</button>
    </CardServico>
  );
};

export default CardJob;
