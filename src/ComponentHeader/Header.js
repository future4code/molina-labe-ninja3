import React from "react";
import ninjas from "./labeninjas2-PNG.png";
import "./Header.css";
import styled from "styled-components";

const Button = styled.button`
    display: block;
    background-color: #d977ff;
    padding: 14px 20px;
    color: black;
    font-size: 17px;
    text-decoration: none;
    border: none;
    cursor: pointer;
  
   :hover {
    background-color: black;
    color: white;
  }
 
`;

const ImagemLogo = styled.img`
    width: 200%;
    
`

class Header extends React.Component {
  render() {
    return (
      <nav id="hambu">
        <div id="tab">
          <ImagemLogo id="logo" src={ninjas} alt="lagos" />
          <label for="drop" class="toggle">
            <svg id="hamb" viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20" rx="8"></rect>
              <rect y="30" width="100" height="20" rx="8"></rect>
              <rect y="60" width="100" height="20" rx="8"></rect>
            </svg>
          </label>
        </div>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <Button>Como Funciona</Button>
          </li>
          <li>
            <Button>Entrar</Button>
          </li>
          <li>
            <Button onClick={this.props.irParaCadastroNinjas}>
              Seja um Profissional
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
