import React from "react";
import CardAulas from "./ComponentsAulas/CardAulas";
import CardAutos from "./ComponentsAutos/CardAutos";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import CardConsultoria from "./ComponentsConsultoria/CardConsultoria";
import CardDesign from "./ComponentsDesign/CardDesign";
import CardModaeBeleza from "./ComponentsModaeBeleza/CardModaeBeleza"
import Header from "./ComponentHeader/Header";
import Footer from "./ComponentFooter/Footer";
import CadastroNinjas from "./ComponentesNinjas/CadastroNinjas";
import ServicosNinjas from "./ComponentesNinjas/ServicosNinjas";
import Carrinho from "./ComponentHeader/Carrinho";
import styled from "styled-components";

const HomeContainer = styled.div`
  grid-template-rows: 10vh 1fr 10vh;
  height: 100%;
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
          <CadastroNinjas irParaCardsCategorias={this.irParaCardsCategorias}  irParaServicosNinjas={this.irParaServicosNinjas}
          />
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

  irParaCardModaeBeleza = () => {
    this.setState({ telaAtual: "CardModaeBeleza" });
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
