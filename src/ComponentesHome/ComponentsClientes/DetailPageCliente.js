import Axios from "axios";
import React from "react";
import { BASE_URL, headers } from "../../constants/BASE_API";
import { converDate } from "../../utils/convertDate";
import styled from "styled-components";

const Button = styled.button`

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
`


class DetailPageCliente extends React.Component {
  state = {
    job: {},
  };

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    Axios.get(`${BASE_URL}/jobs/${this.props.jobId}`, headers)
      .then((res) => {
        this.setState({ job: res.data });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const paymentComponents =
      this.state.job.paymentMethods &&
      this.state.job.paymentMethods.map((pay) => {
        return <li key={pay}>{pay}</li>;
      });

    return (
      <div>
        {this.state.job.title && <h1>{this.state.job.title}</h1>}
        {this.state.job.price && (
          <p>Preço: R${this.state.job.price.toFixed(2)}</p>
        )}
        {this.state.job.dueDate && (
          <p>Prazo: {converDate(this.state.job.dueDate)}</p>
        )}
        {this.state.job.description && <p>{this.state.job.description}</p>}
        <div>{paymentComponents}</div>
        <Button onClick={this.props.irParaClientesHome}>
          Voltar para Lista de Serviços
        </Button>
      </div>
    );
  }
}

export default DetailPageCliente;
