import React from "react";
import aulas from "./images/aulas.svg";
import autos from "./images/autos.svg";
import consultoria from "./images/consultoria.svg";
import modaebeleza from "./images/modaebeleza.svg";
import designetecnologia from "./images/designetecnologia.svg";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 90vh;
  justify-content: center;

  align-content: center;
  grid-auto-columns: 1fr;
  grid-template-rows: 100px 200px 200px;

  h2 {
    text-align: center;
    height: 30px;
    justify-content: center;
  }

  img {
    width: 120px;

    filter: hue-rotate(240deg);
  }
`;

const CardsContainer2 = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const Card1 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card2 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card3 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card4 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card5 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;

const ButtonStyle = styled.button`
  height: 180px;
  width: 200px;
  background-color: white;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: MediumPurple;
  }
`;

const InputBusca = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;

  input {
    width: 30vw;
    height: 5vh;
  }

  button {
    width: 5vw;
    height: 6vh;
    border: none;
    border-radius: 15px;
    margin-left: 10px;

    :hover {
      background-color: mediumpurple;
      color: white;
      cursor: pointer;
    }
  }

  
`;

export default class CardsCategorias extends React.Component {

  state ={
    inputBuscaServicos: ""

  }

  onChangeInputBuscaServicos = (event) => {
    this.setState({ inputBuscaServicos: event.target.value });
  };

  render() {
    return (
      <CardsContainer>
        <h2>Todas as Categorias de Serviços</h2>
        <InputBusca>
          <label>
            <p>Busque o serviço que você precisa</p>
            <input value={this.state.inputBuscaServicos} 
            onChange={this.onChangeInputBuscaServicos} 
            placeholder="O que você precisa?" />
            <button>Buscar</button>
          </label>
        </InputBusca>
        <CardsContainer2>
          <Card1>
            <ButtonStyle onClick={this.props.irParaCardAulas}>
              <img src={aulas} alt="icone-aulas" />
            </ButtonStyle>
          </Card1>
          <Card2>
            <ButtonStyle onClick={this.props.irParaCardAutos}>
              <img src={autos} alt="icone-autos" />
            </ButtonStyle>
          </Card2>
          <Card3>
            <ButtonStyle onClick={this.props.irParaCardConsultoria}>
              <img src={consultoria} alt="icone-consultoria" />
            </ButtonStyle>
          </Card3>
          <Card4>
            <ButtonStyle onClick={this.props.irParaCardDesign}>
              <img src={designetecnologia} alt="icone-designetecnologia" />
            </ButtonStyle>
          </Card4>
          <Card5>
            <ButtonStyle onClick={this.props.irParaCardModaeBeleza}>
              <img src={modaebeleza} alt="icone-modaebeleza" />
            </ButtonStyle>
          </Card5>
        </CardsContainer2>
      </CardsContainer>
    );
  }
}
