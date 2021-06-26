import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL, headers } from "../constants/BASE_API";
import CardJob from "./CardJob";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  button {
    background-color: lavender;
    padding: 14px 20px;
    color: black;
    font-size: 15px;
    text-decoration: none;
    border-radius: 20px;
    border: none;
    cursor: pointer;

    :hover {
      background-color: mediumpurple;
      color: white;
    }
  }
`;

const ContainerServicos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px;
  height: 80vh;
`;

export default class ServicosNinjas extends React.Component {
  state = {
    jobsList: [],
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((res) => {
        this.setState({ jobsList: res.data.jobs });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  deleteJob = (jobId) => {
    axios
      .delete(`${BASE_URL}/jobs/${jobId}`, headers)
      .then((res) => {
        this.getJobs();
      })
      .catch((err) => {
        alert("Serviço não encontrado!");
      });
  };

  render() {
    const jobComponents = this.state.jobsList.map((job) => {
      return (
        <CardJob
          key={job.id}
          job={job}
          irParaDetailPage={this.props.irParaDetailPage}
          deleteJob={this.deleteJob}
        />
      );
    });

    return (
      <ContainerGeral>
        <h2>Serviços Cadastrados</h2>{" "}
        <button onClick={this.props.irParaCadastroNinjas}>
          Voltar para Cadastros
        </button>
        <ContainerServicos>{jobComponents}</ContainerServicos>
      </ContainerGeral>
    );
  }
}
