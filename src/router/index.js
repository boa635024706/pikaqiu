import React from 'react'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import App from '../App'
import Home from '../views/Home'
import Recommend from '../views/Home/Recommend'
import Furniture from '../views/Home/Furniture'
import Furnishing from '../views/Home/Furnishing'
import Activity from '../views/Home/Activity'
import List from '../views/List'
import Shopcar from '../views/Shopcar'
import News from '../views/News'
import Me from '../views/Me'

const routes = (
	<Router>
		<App>
			<Switch>
				<Route path="/Home" render={()=>
					<Home>
						<Switch>
							<Route path="/Home/Recommend" component={Recommend}/>
							<Route path="/Home/Furniture" component={Furniture}/>
							<Route path="/Home/Furnishing" component={Furnishing}/>
							<Route path="/Home/Activity" component={Activity}/>
							<Redirect from="/Home" to="/Home/Recommend"/>
						</Switch>
					</Home>
				}/>
				<Route path="/List" component={List}/>
				<Route path="/Shopcar" component={Shopcar}/>
				<Route path="/News" component={News}/>
				<Route path="/Me" component={Me}/>
				<Redirect path="/" to="/Home/Recommend"/>
			</Switch>
		</App>
	</Router>
	)

export default routes;