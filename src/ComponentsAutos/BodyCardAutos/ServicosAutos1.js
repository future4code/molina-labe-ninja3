import React from "react";
import styled from "styled-components";
import imagemAlarme from "../ImagensCardAutos/imagemAlarme.png";

const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const ImagemAutos = styled.img`
  display: flex;
  width: 80%;
  height: 50%;
`;

export default class ServicosCard extends React.Component {
  render() {
    return (
      <ServicosContainer>
        <ImagemAutos src={imagemAlarme} />
        <h1>Alarme</h1>
        <a>Preço</a>
        <a>Método de pagamento</a>
        <a>Prazo</a>
        <button>Saiba mais</button>
        <button>Contratar</button>
      </ServicosContainer>
    );
  }
}
