import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'

import PageTitle from 'component/page-title/index.jsx'
import Header from 'page/header/header.jsx'
import Nav from 'page/nav/nav.jsx'
import Footer from 'page/footer/footer.jsx'
import './index.scss'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'

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
				<div id="blockchain">
					<div className="content">
						<div className="content-box1">
							<img className="content-img" src={one} alt=""/>
							<img className="content-img" src={three} alt=""/>
							<img className="content-img" src={one} alt=""/>
						</div>
						<div className="content-box2">
							<img className="content-img" src={two} alt=""/>
							<img className="content-img" src={four} alt=""/>
							<img className="content-img" src={five} alt=""/>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		)
	}
}

export default Home