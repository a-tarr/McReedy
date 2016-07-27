export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

function fetchUser() {
	return { type: FETCH_USER }
}

function fetchUserSuccess(user, data) {
	return { type: FETCH_USER_SUCCESS, user, data }
}

export function fetchUserStats(user) {
	return dispatch => {
		dispatch(fetchUser());
		fetch('https://crossorigin.me/https://owapi.net/api/v2/u/' + user + '/stats/general')
			.then(response => response.json())
		  .then(data => {
		  	dispatch(fetchUserSuccess(user, data));
	    });
	}
}