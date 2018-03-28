import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'

import PageTitle from 'component/page-title/index.jsx'
import Header from 'page/header/header.jsx'
import Nav from 'page/nav/nav.jsx'
import Footer from 'page/footer/footer.jsx'
import './index.scss'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render(){
		return(
			<div id="page-wrapper">
				<Header></Header>
				<Nav></Nav>
			</div>
		)
	}
}

export default Home