import axios from "axios";
import React from "react";
import styled from "styled-components";
import { BASE_URL, headers } from "../constants/BASE_API";
// import ServicosNinjas from "./ServicosNinjas";

const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  gap: 20px;
  background-color: white;

  h2 {
    color: mediumpurple;
  }

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

const Titulo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  input {
    width: 200px;
    height: 25px;
  }
`;

const Descricao = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  input {
    width: 200px;
    height: 25px;
  }
`;

const Preco = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  input {
    width: 200px;
    height: 25px;
  }
`;

const Pagamento = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  input {
    width: 100px;
    height: 10vh;
  }
`;

const Prazo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default class CadastroNinjas extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    dueDate: "",
  };

  onChangeTituloServico = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDescricaoServico = (event) => {
    this.setState({ description: event.target.value });
  };

  onChangePrecoServico = (event) => {
    this.setState({ price: event.target.value });
  };

  onChangeMetodoPagamento = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    this.setState({ paymentMethods: value });
  };

  onChangeDueDate = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  // onChangeCategoriaServico = (event) => {
  //   this.setState({ dueDate: event.target.value });
  // };

  createJob = () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate,
    };
    axios
      .post(`${BASE_URL}/jobs`, body, headers)
      .then(() => {
        alert(`O servi??o ${this.state.title} foi cadastrado com sucesso!`);
        this.setState({
          title: "",
          description: "",
          price: "",
          paymentMethods: [],
          dueDate: "",
        });
      })
      .catch((err) => {
        alert(err.response.data.massage);
      });
  };

  render() {
    return (
      <ContainerCadastro>
        <h2>Cadastro de Servi??os</h2>
        <Titulo>
          T??tulo:
          <input
            value={this.state.title}
            type="text"
            onChange={this.onChangeTituloServico}
            placeholder="nome do servi??o"
          />
        </Titulo>
        <Descricao>
          Descri????o:
          <input
            value={this.state.description}
            type="text"
            onChange={this.onChangeDescricaoServico}
            placeholder="fale mais sobre seu servi??o"
          />
        </Descricao>
        <Preco>
          Pre??o:
          <input
            value={this.state.price}
            type="number"
            onChange={this.onChangePrecoServico}
            placeholder="ex. 40"
          />
        </Preco>
        <Pagamento>
          M??todo de pagamento
          <select
            value={this.state.paymentMethods}
            onChange={this.onChangeMetodoPagamento}
          >
            <option>PayPal</option>
            <option>Boleto</option>
          </select>
        </Pagamento>
        <Prazo>
          Prazo:
          <input
            value={this.state.dueDate}
            type="date"
            onChange={this.onChangeDueDate}
            placeholder="ex. 2021-06-23"
          />
        </Prazo>
        <button onClick={this.createJob}>Cadastrar Servi??o</button>
        <button onClick={this.props.irParaServicosNinjas}>
          Lista de Servi??os Cadastrados
        </button>
        <button onClick={this.props.irParaCardsCategorias}>Voltar</button>
      </ContainerCadastro>
    );
  }
}
