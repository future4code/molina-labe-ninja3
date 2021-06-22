import React from "react";
import CardAulas from "./componentsBruno/CardAulas/CardAulas";
import CardAutos from "./ComponentsAutos/CardAutos";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import styled from 'styled-components'

export default class App extends React.Component {


	render () {
		return (
			<>

			<CardAulas />
			<CardAutos />
			<CardsCategorias/>

			</>

			
		) 
	}
	
  

}


