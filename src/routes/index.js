import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="*" component={Home}/>
		</Switch>
	</BrowserRouter>
);

export default Router;