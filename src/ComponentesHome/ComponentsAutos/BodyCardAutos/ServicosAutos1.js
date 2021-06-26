import React from "react";
import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeadereServicoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeaderAutos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-self: start;
  align-items: center;
`;

const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button = styled.button`
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
`;

export default class ServicosCard extends React.Component {
  render() {
    return (
      <ContainerGeral>
        <HeadereServicoContainer>
          <HeaderAutos>
            <Button onClick={this.props.irParaCardsCategorias}>HOME</Button>
            <h1>Precisando de Serviços para Automóveis?</h1>
            <h2>
              Todos os profissionais são avaliados por clientes, e você só
              negocia com os melhores!
            </h2>
          </HeaderAutos>
          <ServicosContainer>
            <h1>Alarme</h1>
            <a>Preço</a>
            <a>Método de pagamento</a>
            <a>Prazo</a>
            <button>Saiba mais</button>
            <button>Contratar</button>
          </ServicosContainer>
        </HeadereServicoContainer>
      </ContainerGeral>
    );
  }
}
