import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router'

import roots from './views/roots'
import list from './views/list'
import detail from './views/detail'
import writeLog from './views/writeLog'

 const RouteConfig= (
	<Router history={browserHistory}>
		<Route path='/' component={roots}>
			<IndexRoute component={list} />
			<Route path='detail' component={detail} />
			<Route path='writeLog' component={writeLog} />
		</Route>
	</Router>
)
export default RouteConfig