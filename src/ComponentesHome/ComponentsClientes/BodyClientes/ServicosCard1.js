import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL, headers } from "../../../constants/BASE_API";
import CardJobs from "./CardJobs";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;

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
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 75vw;
`;

const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  background-color: #d977ff;
  height: 100vh;
  width: 25vw;
  position: relative;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const TituloFiltroH3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconeFiltro = styled.img`
  width: 8%;
`;

const OrdenacaoProdutos = styled.h3`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default class ServicosCard1 extends React.Component {
  state = {
    jobsList: [],
    filteredJobsList: [],
    minVal: "",
    maxVal: "",
    search: "",
    order: "",
  };

  componentDidMount() {
    this.getJobs();
    this.filterJobs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.minVal !== prevState.minVal ||
      this.state.maxVal !== prevState.maxVal ||
      this.state.search !== prevState.search ||
      this.state.order !== prevState.order
    ) {
      this.filterJobs();
    }
  }

  handleMinVal = (e) => {
    this.setState({ minVal: e.target.value });
  };

  handleMaxVal = (e) => {
    this.setState({ maxVal: e.target.value });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleOrder = (e) => {
    this.setState({ order: e.target.value });
  };

  getJobs = () => {
    axios
      .get(`${BASE_URL}/jobs`, headers)
      .then((res) => {
        this.setState({
          jobsList: res.data.jobs,
          filteredJobsList: res.data.jobs,
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  filterJobs = () => {
    const maximum = this.state.maxVal ? Number(this.state.maxVal) : Infinity;
    const minimum = this.state.minVal ? Number(this.state.minVal) : -Infinity;

    const newJobsList = this.state.jobsList
      .filter((job) => job.price >= minimum)
      .filter((job) => job.price <= maximum)
      .filter((job) => {
        const jobTitle = job.title.toLowerCase();
        const jobDescription = job.description.toLowerCase();
        const searchText = this.state.search.toLocaleLowerCase();
        return (
          jobTitle.includes(searchText) || jobDescription.includes(searchText)
        );
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "T??tulo":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
        }
      });

    this.setState({ filteredJobsList: newJobsList });
  };

  render() {
    const jobComponents = this.state.filteredJobsList.map((job) => {
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
        <ContainerFilter>
          <TituloFiltroH3>
            <IconeFiltro
              src="https://image.flaticon.com/icons/png/512/223/223420.png"
              alt="icone filtro"
            />{" "}
            <p>Filtros</p>{" "}
          </TituloFiltroH3>
          <div>
            <p>Valor minimo:</p>
            <input
              value={this.state.minVal}
              onChange={this.handleMinVal}
              placeholder="Valor M??nimo"
            />
          </div>
          <div>
            <p>Valor m??ximo:</p>
            <input
              value={this.state.maxVal}
              onChange={this.handleMaxVal}
              placeholder="Valor M??ximo"
            />
          </div>
          <div>
            <p>Buscar por T??tulo:</p>
            <input
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Busca por t??tulo ou descri????o"
            />
          </div>
          <OrdenacaoProdutos>
            <p>
              Ordena????o:
              <select value={this.state.order} onChange={this.handleOrder}>
                <option>Sem Ordena????o</option>
                <option>Menor Valor</option>
                <option>Maior Valor</option>
                <option>T??tulo</option>
                <option>Prazo</option>
              </select>
            </p>
          </OrdenacaoProdutos>
        </ContainerFilter>
        <ContainerServicos>{jobComponents}</ContainerServicos>
      </ContainerGeral>
    );
  }
}
