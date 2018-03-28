import React from 'react'

import './index.scss'

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render(){
		return(
			<div style={{overflow:'hidden'}}>
				<div className="row header-top">
					<div className="col-md-12 col-xs-12 col-sm-12">
						<div className="header-title">
							<span>Listed tokens : 1514</span>
							<span className="hidden-xs hidden-sm">Market Capitalisation : $371,647,462,820</span>
							<span className="hidden-xs">Daily Volume : $13,490,017,187</span>
						</div>
					</div>
				</div>
				<div className="row header_table col-xs-12">
					<div className="header_row">
						<a href="javascript:void(0)">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)" className="hidden-xs">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)" className="hidden-xs">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)" className="hidden-xs hidden-sm">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)" className="hidden-xs hidden-sm">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)" className="hidden-xs hidden-sm hidden-md">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
						<a href="javascript:void(0)" className="hidden-xs hidden-sm hidden-md">
							<div className="header_col1">
								<span>BTC/USD</span>
								<em>8123.9</em>
							</div>
							<div className="header_col2">
								<span><i class="fa fa-long-arrow-up"></i>0.67%</span>
								<em>46.0</em>
							</div>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Header