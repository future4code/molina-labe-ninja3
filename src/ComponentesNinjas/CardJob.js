import React from "react";
import styled from "styled-components";
import { converDate } from "../utils/convertDate";

const CardServico = styled.div`
  height: 250px;
  border: 2px solid black;
  margin: 10px;
  width: 150px;
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
