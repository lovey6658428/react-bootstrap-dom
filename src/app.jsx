import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch, Redirect, Route, Link } from 'react-router-dom'
//页面
import Home from 'page/home/index.jsx';


export default class App extends React.Component{
	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/product" component={Home} />
				</Switch>
			</Router>
		)
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('app')
)