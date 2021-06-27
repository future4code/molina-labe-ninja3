import React from "react";
import CardAulas from "./ComponentesHome/ComponentsAulas/CardAulas";
import CardAutos from "./ComponentesHome/ComponentsAutos/CardAutos";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import CardConsultoria from "./ComponentesHome/ComponentsConsultoria/CardConsultoria";
import CardDesign from ".//ComponentesHome/ComponentsDesign/CardDesign";
import CardModaeBeleza from "./ComponentesHome/ComponentsModaeBeleza/CardModaeBeleza";
import Header from "./ComponentHeader/Header";
import Footer from "./ComponentFooter/Footer";
import CadastroNinjas from "./ComponentesNinjas/CadastroNinjas";
import ServicosNinjas from "./ComponentesNinjas/ServicosNinjas";
import Carrinho from "./ComponentHeader/Carrinho";
import styled from "styled-components";
import DetailPage from "./ComponentesNinjas/DetailPage";
import DetailPageCliente from "./ComponentesHome/ComponentsClientes/DetailPageCliente";
import ClientesHome from "./ComponentesHome/ComponentsClientes/ClientesHome";

const HomeContainer = styled.div`
  grid-template-rows: 20vh 1fr 30vh;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  align-content: center;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "CardsCategorias",
    jobDetailId: "",
    carrinho: [],
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "CardsCategorias":
        return (
          <CardsCategorias
            irParaCardAulas={this.irParaCardAulas}
            irParaCardAutos={this.irParaCardAutos}
            irParaCardConsultoria={this.irParaCardConsultoria}
            irParaCardDesign={this.irParaCardDesign}
            irParaCardModaeBeleza={this.irParaCardModaeBeleza}
            irParaClientesHome={this.irParaClientesHome}
          />
        );
      case "CardAulas":
        return <CardAulas irParaCardsCategorias={this.irParaCardsCategorias} />;
      case "CardAutos":
        return <CardAutos irParaCardsCategorias={this.irParaCardsCategorias} />;
      case "CardConsultoria":
        return (
          <CardConsultoria irParaCardsCategorias={this.irParaCardsCategorias} />
        );
      case "CardDesign":
        return (
          <CardDesign irParaCardsCategorias={this.irParaCardsCategorias} />
        );
      case "CardModaeBeleza":
        return (
          <CardModaeBeleza irParaCardsCategorias={this.irParaCardsCategorias} />
        );
      case "CadastroNinjas":
        return (
          <CadastroNinjas
            irParaCardsCategorias={this.irParaCardsCategorias}
            irParaServicosNinjas={this.irParaServicosNinjas}
          />
        );
      case "ServicosNinjas":
        return (
          <ServicosNinjas
            irParaCadastroNinjas={this.irParaCadastroNinjas}
            irParaDetailPage={this.irParaDetailPage}
          />
        );
      case "detail":
        return (
          (
            <DetailPage
              jobId={this.state.jobDetailId}
              irParaServicosNinjas={this.irParaServicosNinjas}
            />
          ),
          (
            <DetailPageCliente
              jobId={this.state.jobDetailId}
              irParaClientesHome={this.irParaClientesHome}
            />
          )
        );

      case "ClientesHome":
        return (
          <ClientesHome
            irParaCardsCategorias={this.irParaCardsCategorias}
            irParaDetailPageCliente={this.irParaDetailPageCliente}
            addCarrinho={this.addCarrinho}
          />
        );
      case "Carrinho":
        return (
          <Carrinho
            jobId={this.state.jobDetailId}
            irParaClientesHome={this.irParaClientesHome}
            carrinho={this.state.carrinho}
            RemoverJob={this.RemoverJob}
          />
        );
      default:
        return <div>Erro! Página não encontrada.</div>;
    }
  };

  RemoverJob = (jobARemover) => {
    const novoCarrinho = this.state.carrinho.filter(
      (job) => job.id === jobARemover 
    );
    this.setState({ carrinho: novoCarrinho });
    alert("Serviço removido com sucesso!!")
  };

  addCarrinho = (job) => {
    this.setState({ carrinho: [...this.state.carrinho, job] });
    alert("Serviço adicionado com sucesso!!")
  };
  irParaCarrinho = () => {
    this.setState({ telaAtual: "Carrinho" });
  };

  irParaClientesHome = () => {
    this.setState({ telaAtual: "ClientesHome" });
  };

  irParaServicosNinjas = () => {
    this.setState({ telaAtual: "ServicosNinjas" });
  };

  irParaCadastroNinjas = () => {
    this.setState({ telaAtual: "CadastroNinjas" });
  };

  irParaDetailPageCliente = (jobId) => {
    this.setState({ telaAtual: "detail", jobDetailId: jobId });
  };

  irParaDetailPage = (jobId) => {
    this.setState({ telaAtual: "detail", jobDetailId: jobId });
  };

  irParaCardsCategorias = () => {
    this.setState({ telaAtual: "CardsCategorias" });
  };

  irParaCardAulas = () => {
    this.setState({ telaAtual: "CardAulas" });
  };

  irParaCardAutos = () => {
    this.setState({ telaAtual: "CardAutos" });
  };

  irParaCardConsultoria = () => {
    this.setState({ telaAtual: "CardConsultoria" });
  };

  irParaCardDesign = () => {
    this.setState({ telaAtual: "CardDesign" });
  };

  irParaCardModaeBeleza = () => {
    this.setState({ telaAtual: "CardModaeBeleza" });
  };

  render() {
    console.log("ListaNoCarrinho", this.state.carrinho);
    return (
      <HomeContainer>
        <Header
          irParaCadastroNinjas={this.irParaCadastroNinjas}
          irParaCarrinho={this.irParaCarrinho}
          carrinho={this.state.carrinho}
        />
        {this.escolheTela()}
        <Footer />
      </HomeContainer>
    );
  }
}
