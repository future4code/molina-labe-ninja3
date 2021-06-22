import React from "react";
import ninjas from './ninja.png'
import './Header.css';


class Header extends React.Component {

    render() {
        return (

            <nav id="hambu" >
            <div id="tab" >
    <img id="logo" src={ninjas} alt="lagos" />
                <label for="drop" class="toggle"><svg id="hamb" viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="60" width="100" height="20" rx="8"></rect>
                </svg>
                
                </label>
            </div>
            <input type="checkbox" id="drop" />
            <ul class="menu">
    
                <li><a href="#">Como Funciona</a></li>
                <li><a href="#">Entrar</a></li>
                <li><a href="#">Seja um Profissional</a></li>
            </ul>
        </nav>
    
        )
    }
}



export default Header