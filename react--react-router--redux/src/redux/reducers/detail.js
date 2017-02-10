const initialState = {
	detail: null
}

export default function detailState(state=initialState, action) {
	switch(action.type) {
		case 'GET_DETAIL':
			return Object.assign({}, state, {
				...state,
				detail: action.data
			})
		default:
			return state
	}
}