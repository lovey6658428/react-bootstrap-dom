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
			<div id="footer">
				<div className="footer-content">
					<div className="footer-list">
						<ul>
							<li>Tools</li>
							<li>House Rules</li>
							<li>API</li>
							<li>Chat</li>
							<li>People</li>
							<li>Stock Screener</li>
							<li>APP Store</li>
						</ul>
						<ul>
							<li>For Business</li>
							<li>Website & Broker Solution</li>
							<li>Widgets</li>
							<li>Charting Library</li>
							<li>Tading Terminal</li>
							<li>Brokerage Lintegration</li>
							<li>Advertising</li>
							<li>Rreferral Program</li>
						</ul>
						<ul>
							<li>Support</li>
							<li>Contact Support</li>
							<li>Status Page</li>
							<li>Blog</li>
							<li>Feature Request</li>
							<li>Help & Wiki</li>
							<li>FAQ</li>
							<li>Contact</li>
						</ul>
						<ul>
							<li>About</li>
							<li>How it Works</li>
							<li>Features</li>
							<li>Compare Plans</li>
							<li>Press</li>
							<li>Terms of Use</li>
							<li>Risk Warning</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<hr/>
					<div className="footer-bottom">
						<span>© 2018 ViewFT</span>
						<span>Form the creators of xxxxcharts</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer