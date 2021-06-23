import React from "react";
import styled from "styled-components";
import imagemAdv from './adv.jpg';
import imagemCont from './cont.jpg';

const Servicos = styled.div`
  display: flex;
`;

const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const ServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 70vh;
`;

const Imagem = styled.img`
  display: flex;
  width: 50%;
  max-height: 45%;
`;

const Imagem2 = styled.img`
  display: flex;
  width: 45vw;
  max-height: 40vh;
  margin-top: 30px;
`;

const Card = styled.div`
  position: absolute;
  left: -300%;
  width: 70vw;   
`;


export default class Consultoria extends React.Component {


  render() {
    return (<Card>
      <HeaderCard>
        <h1>Precisando de consultores?</h1>
        <h2 >Temos os melhores profissionais, mais bem avaliados!!</h2>
      </HeaderCard>
      <Servicos>
        <ServicosContainer>
          <Imagem src={imagemAdv} />
          <h1>Advogado</h1>
          <a>Preço</a>
          <a>Método de pagamento</a>
          <a>Prazo</a>
          <button>Saiba mais</button>
          <button>Contratar</button>
        </ServicosContainer>

        <ServicosContainer>
          <Imagem2 src={imagemCont} />
          <h1>Contador</h1>
          <a>Preço</a>
          <a>Método de pagamento</a>
          <a>Prazo</a>
          <button>Saiba mais</button>
          <button>Contratar</button>
        </ServicosContainer>
      </Servicos>
    </Card>

    )
  }
}