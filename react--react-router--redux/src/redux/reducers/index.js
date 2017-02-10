import {combineReducers} from 'redux'
import listState from './list'
import detailState from './detail'

export default combineReducers({
	listState,
	detailState
})