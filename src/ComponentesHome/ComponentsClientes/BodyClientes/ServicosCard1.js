import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL, headers } from "../../../constants/BASE_API";
import CardJobs from "./CardJobs";

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
export default class ServicosCard1 extends React.Component {
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

  render() {
    const jobComponents = this.state.jobsList.map((job) => {
      return (
        <CardJobs
          key={job.id}
          job={job}
          irParaDetailPageCliente={this.props.irParaDetailPageCliente}
          iParaCarrinho={this.props.iParaCarrinho}
          addCarrinho={this.props.addCarrinho}
        />
      );
    });
    return (
      <ContainerGeral>
        <ContainerServicos>{jobComponents}</ContainerServicos>
      </ContainerGeral>
    );
  }
}
