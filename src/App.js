import React from "react";
import CardAulas from "./ComponentsAulas/CardAulas";
import CardAutos from "./ComponentsAutos/CardAutos";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import CardConsultoria from "./ComponentsConsultoria/CardConsultoria";
import CardDesign from "./ComponentsDesign/CardDesign";
import Header from "./ComponentHeader/Header";
import Footer from "./ComponentFooter/Footer";
import CadastroNinjas from "./ComponentesNinjas/CadastroNinjas";
import ServicosNinjas from "./ComponentesNinjas/ServicosNinjas";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 10vh 1fr 10vh;
  height: 100%;
  width: 100vw;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "CardsCategorias",
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
        case "CadastroNinjas":
        return (
          <CadastroNinjas irParaCardsCategorias={this.irParaCardsCategorias}  irParaServicosNinjas={this.irParaServicosNinjas} />
        );
        case "ServicosNinjas":
        return (
          <ServicosNinjas  irParaCadastroNinjas={this.irParaCadastroNinjas} />
        );
      default:
        return <div>Erro! Página não encontrada.</div>;
    }
  };

  irParaServicosNinjas = () => {
    this.setState({ telaAtual: "ServicosNinjas" });
  };

  irParaCadastroNinjas = () => {
    this.setState({ telaAtual: "CadastroNinjas" });
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

  render() {
    return (
      <HomeContainer>
        <Header irParaCadastroNinjas={this.irParaCadastroNinjas} />
        {this.escolheTela()}
        <Footer />
      </HomeContainer>
    );
  }
}
