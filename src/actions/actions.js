import fetch from 'isomorphic-fetch'

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'


export function fetchUser(user) {
	const request = fetch('https://owapi.net/api/v2/u/' + user +'/stats', {
			method: 'get'
		}).then(response => response.json())
		  .then(data => { return data })
	    .catch(err => { console.log('Fetch Error :-S', err);
	  });

	return { type: FETCH_USER, request }
}

export function fetchUserSuccess(user) {
	return { type: FETCH_USER_SUCCESS, user }
}

export function fetchUserFailure(error) {
	return { type: FETCH_USER_ERROR, error }
}