
const API_HOST = 'http://localhost:5000'

/* A function to send a POST request to register a new student account. */
export const registerStudent = (email, password, firstname, lastname) => {
    return fetch(`${API_HOST}/auth/register/student`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "email": email,
            "password": password,
            "first_name": firstname,
            "last_name": lastname,
        })
    }).then((response) => { 
        console.log(response)
        return response
    }).catch((error) => { 
        console.log(error)
        return error
    })
}

/* A function to send a POST request to register a new business account. */
export const registerBusiness = (email, password, name, category, location) => {
    return fetch(`${API_HOST}/auth/register/business`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": name
        })
    }).then((response) => { 
        console.log(response)
        return response
    }).catch((error) => { 
        console.log(error)
        return error
    })
}

/* A function to send a POST request to log a user in. */
export const login = (email, password) => {
    return fetch(`${API_HOST}/auth/login/student`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    }).then((response) => { 
        console.log(response)
        return response
    }).catch((error) => { 
        console.log(error)
        return error
    })
}