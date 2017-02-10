require('babel-polyfill')

const initialState = {
	list: null
}

export default function listState(state=initialState, action) {
	switch(action.type) {
		case 'GET_LIST':
			return Object.assign({}, state, {
				...state,
				list: action.data
			})
		default:
			return state
	}
}