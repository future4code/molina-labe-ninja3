import React from "react";
import CardAulas from "./componentsBruno/CardAulas/CardAulas";
import CardAutos from "./ComponentsAutos/CardAutos";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import CardDesign from "./ComponentesSuzana/CardDesign";
import styled from 'styled-components'
import Header from "./componentsCarlos/Header";
import Footer from './componentsJoice/footer/Footer'


export default class App extends React.Component {


	render () {
		return (

			<div>
			<Header/>
			
			<CardsCategorias/>
			<Footer/>

			</div>

		) 
	}
	
  

}

