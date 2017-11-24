
import axios from 'axios'
export function fetchWords() {
	/*return {
		type: "FETCH_WORDS",
		payload: new Promise((resolve,reject) => {
			console.log(new Promise((resolve,reject) => {
				resolve(axios.get('http://localhost:8081/words'));
			})
		})
	}*/
	return dispatch => {
		axios.get('http://localhost:8081/words').then((response) => dispatch({
			type: "FETCH_WORDS",
			payload: response.data
		}))
	}
}


export function addWord(word){
	return dispatch => {
		axios.post('http://localhost:8081/words',word)
		.then(response => {
			console.log(response);
			dispatch(fetchWords());
		})
		.catch(error => {
			console.log('error'+error.response)
		})
	}
}