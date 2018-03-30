import React from 'react'
import {Button,Grid, Row, Col, Clearfix} from 'react-bootstrap'
import './index.scss'
import Logo from './logo.png'

class Nav extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render(){
		return(
			<div className="container-fluid nav-main">
				<div className="row">
					<div className="nav-wrap">
						<div className="nav-logo col-md-3 col-sm-12 col-xs-12">
							<img src={Logo} alt=""/>
							<span>VIEWFIN INDEX</span>
						</div>
						<div className="nav-search col-md-9 col-sm-12 hidden-xs">
							<div className="search-wrap">
								<div className="cut">EN</div>
								<div className="search">
									<select name="" id="">
										<option value="index">index</option>
										<option value="index">index</option>
										<option value="index">index</option>
									</select>
									<input type="text"/>
									<button>sign in</button>
									<button>sign up</button>
								</div>
							</div>
						</div>					
					</div>
				</div>
				<div className="row">
				<div className="menu-content">
					<div className="col-md-12">
						<ul className="menu-list">
							<li className="menu-item active"><a href="javascript:void(0)">Index</a></li>
							<li className="menu-item"><a href="javascript:void(0)">Coins</a></li>
							<li className="menu-item"><a href="javascript:void(0)">User Idea</a></li>
							<li className="menu-item"><a href="javascript:void(0)">Rank</a></li>
							<li className="menu-item"><a href="javascript:void(0)">Rate</a></li>
							<li className="menu-item"><a href="javascript:void(0)">Ticker</a></li>
						</ul>
					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default Nav