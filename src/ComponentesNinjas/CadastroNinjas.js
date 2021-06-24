import React from "react";
import styled from "styled-components";
// import ServicosNinjas from "./ServicosNinjas";

const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 40vw;
  gap: 20px;

  button {
    background-color: white;
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

const Categorias = styled.div`
 display: flex;
  flex-direction: row;
  gap: 20px;

  input {
    width: 200px;
    height: 25px;
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
`

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
    width: 200px;
    height: 25px;
  }

`;

const Prazo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  input {
    width: 200px;
    height: 25px;
  }

`;

export default class CadastroNinjas extends React.Component {
  state = {
    categoriaServico: [],
    tituloServico: "",
    descricaoServico: "",
    precoServico: "",
    metodoPagamento: "",
    prazoEntrega: "",
  };

  onChangeCategoriaServico = (event) => {
    this.setState({ categoriaServico: event.target.value });
  };

  onChangeTituloServico = (event) => {
    this.setState({ tituloServico: event.target.value });
  };

  onChangeDescricaoServico = (event) => {
    this.setState({ descricaoServico: event.target.value });
  };

  onChangePrecoServico = (event) => {
    this.setState({ precoServico: event.target.value });
  };

  onChangeMetodoPagamento = (event) => {
    this.setState({ metodoPagamento: event.target.value });
  };

  onChangeCategoriaServico = (event) => {
    this.setState({ prazoEntrega: event.target.value });
  };

  render() {
    return (
      <ContainerCadastro>
        <h2>Cadastro de Serviços</h2>
        <Categorias>
          Categoria:
          <select>
            value={this.state.categoriaServico}
            onChange={this.onChangeMetodoPagamento}
            <option>Aulas</option>
            <option>Autos</option>
            <option>Consultoria</option>
            <option>Design e Tecnologia</option>
            <option>Moda e Beleza</option>
          </select>
        </Categorias>
        <Titulo>
          Título:
          <input
            value={this.state.tituloServico}
            onChange={this.onChangeTituloServico}
            placeholder="nome do serviço"
          />
        </Titulo>
        <Descricao>
          Descrição:
          <input
            value={this.state.descricaoServico}
            onChange={this.onChangeDescricaoServico}
            placeholder="fale mais sobre seu serviço"
          />
        </Descricao>
        <Preco>
          Preço:
          <input
            value={this.state.precoServico}
            onChange={this.onChangePrecoServico}
            placeholder="ex. 40"
          />
        </Preco>
        <Pagamento>
          Método de pagamento
          <select>
            value={this.state.metodoPagamento}
            onChange={this.onChangeMetodoPagamento}
            <option>PayPal</option>
            <option>Boleto</option>
          </select>
        </Pagamento>
        <Prazo>
          Prazo:
          <input
            value={this.state.prazoEntrega}
            onChange={this.onChangePrazoEntrega}
            placeholder="ex. 2021-06-23"
          />
        </Prazo>
        <button>Cadastrar Serviço</button>
        <button onClick={this.props.irParaServicosNinjas}>
          Lista de Serviços Cadastrados
        </button>
        <button onClick={this.props.irParaCardsCategorias}>Voltar</button>
      </ContainerCadastro>
    );
  }
}
