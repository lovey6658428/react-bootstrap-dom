import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'

import PageTitle from 'component/page-title/index.jsx'
import Header from 'page/header/index.jsx'
import Nav from 'page/nav/index.jsx'
import Footer from 'page/footer/index.jsx'
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
				<Grid>
					<Row>
						<Col xs={12} md={8} className="main">
							<div className="box1">内容部分</div>
						</Col>
						<Col xs={12} md={4} className="main">
							<div className="box2">内容部分</div>
						</Col>
					</Row>
				</Grid>
				<Footer></Footer>
			</div>
		)
	}
}

export default Home