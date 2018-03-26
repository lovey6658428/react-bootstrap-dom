import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'
import './index.scss'

class Nav extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render(){
		return(
			<Grid className="content">
                <Row className="nav-wrap">
                    <Col xs={12} md={12}>
                        <span>导航栏</span>
                    </Col>
                </Row>
            </Grid>
		)
	}
}

export default Nav