import axios from 'axios';

export function getDetail(url) {
	return (dispatch) => {
		axios({
			url: url,
			dataType: 'json'
		}).then(function(res) {
			var data = res.data;
			dispatch({
				type: 'GET_DETAIL',
				data: data
			})
		}).catch(function(err) {
			console.log(err)
		})
	}
}