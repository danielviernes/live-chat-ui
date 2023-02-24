export function getUserByUsername(username) {
    return fetch(`${process.env.REACT_APP_WS_BASE_URL}/user?` + new URLSearchParams({ username: username }), {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': 'http://localhost:8080'

        },

    }).then(response => {
        return response.json().then(data => {
            return { "username": data.username };
        });
    });
}