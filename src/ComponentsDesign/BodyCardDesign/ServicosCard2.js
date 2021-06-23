import React from "react";
import styled from "styled-components";


const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  button{
    cursor: pointer;
  }
`;

const ImagemAula = styled.img`
  display: flex;
  width: 60%;
  height: 50%;
`;

export default class ServicosCard2 extends React.Component {
  render() {
    return (
      <ServicosContainer>
        <ImagemAula src="https://4.imimg.com/data4/RT/NH/MY-19242443/tridindia-autocad-services-500x500.jpg" />
        <h1>Desenhos e Projetos em AutoCAD com Autodesk Studio 3D Max</h1>
        <a>Preço</a>
        <a>Método de pagamento</a>
        <a>Prazo</a>
        <button>Saiba mais</button>
        <button>Contratar</button>
      </ServicosContainer>
    );
  }
}
