import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import routes from './routers'
import store from './redux'


require('./assets/css/base.css')
render(
	<Provider store={store}>
		{routes}
	</Provider>
	, document.getElementById('app'));