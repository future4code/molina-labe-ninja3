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

const ImagemDados = styled.img`
  display: flex;
  width: 60%;
  height: 50%;
`;

export default class ServicosCard1 extends React.Component {
  render() {
    return (
      <ServicosContainer>
        <ImagemDados src= "https://tecsysteminformatica.com/wp-content/uploads/2020/08/Recuperacaodedados2.jpeg" />
        <h1>Recuperação de Dados</h1>
        <a>Preço</a>
        <a>Método de pagamento</a>
        <a>Prazo</a>
        <button>Saiba mais</button>
        <button>Contratar</button>
      </ServicosContainer>
    );
  }
}
