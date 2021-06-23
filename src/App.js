import React from "react";
import CardAulas from "./ComponentsAulas/CardAulas";
import CardAutos from "./ComponentsAutos/CardAutos";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import Consultoria from "./ComponentsConsultoria/Consultoria";
import CardDesign from "./ComponentsDesign/CardDesign";
import styled from "styled-components";

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
            irparaConsultoria={this.irParaConsultoria}
            irParaCardDesign={this.irParaCardDesign}
          />
        );
      case "CardAulas":
        return <CardAulas irParaCardsCategorias={this.irParaCardsCategorias} />;
      case "CardAutos":
        return <CardAutos irParaCardsCategorias={this.irParaCardsCategorias} />;
      case "Consultoria":
        return (
          <Consultoria irParaCardsCategorias={this.irParaCardsCategorias} />
        );
      case "CardDesign":
        return (
          <CardDesign irParaCardsCategorias={this.irParaCardsCategorias} />
        );
      default:
        return <div>Erro! Página não encontrada.</div>;
    }
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

  irParaConsultoria = () => {
    this.setState({ telaAtual: "Consultoria" });
  };

  irParaCardDesign = () => {
    this.setState({ telaAtual: "CardDesign" });
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
