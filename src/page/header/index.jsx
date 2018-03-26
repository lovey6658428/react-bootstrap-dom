import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'

import './index.scss'

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render(){
		return(
			<div id="page-wrapper">
				<Grid className="content">
					<Row className="show-grid">
						<Col xs={12} md={12}>头部</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Header