import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'

import './index.scss'

class Footer extends React.Component{
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
						<Col xs={12} md={12}>页脚</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Footer