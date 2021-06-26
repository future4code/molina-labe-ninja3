import Axios from "axios";
import React from "react";
import { BASE_URL, headers } from "../constants/BASE_API";
import { converDate } from "../utils/convertDate";

class DetailPage extends React.Component {
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
        <button onClick={this.props.irParaServicosNinjas}>
          Voltar para os Serviços
        </button>
      </div>
    );
  }
}

export default DetailPage;
