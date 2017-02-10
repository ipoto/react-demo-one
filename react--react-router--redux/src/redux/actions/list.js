import axios from 'axios'

export function getList(url, status) {
	return (dispatch) => {
		axios({
			url: url,
			dataType: 'json'
		}).then(function(res) {
			var data = res.data;
			data.status = status;
			dispatch({
				type: 'GET_LIST',
				data: data
			})
		}).catch(function(err) {
			console.log(err)
		})
	}
}