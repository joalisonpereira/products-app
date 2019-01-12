import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact/>
			<Route path="/product/:id" component={Product}/>
			<Route path="*" component={Home}/>
		</Switch>
	</BrowserRouter>
);

export default Router;