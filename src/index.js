import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router'

require('./assets/css/base.css')

import list from './views/list'
import detail from './views/detail'
import writeLog from './views/writeLog'

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={list} />
			<Route path='detail' component={detail} />
			<Route path='writeLog' component={writeLog} />
		</Route>
	</Router>
), document.getElementById('app'));