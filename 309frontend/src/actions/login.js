
const API_HOST = 'http://localhost:5000'

/* A function to update the login form. */
export const updateLoginForm = (comp, field) => {
    const value = field.value;
    const name = field.name;
    comp.setState({ [name]: value })
}

/* A function to send a POST request to register a new student account. */
export const registerStudent = (comp, event) => {
    event.preventDefault()
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert('Passwords do not match.')
        return
    }
    // make a call to the server API to register a student
    fetch(`${API_HOST}/auth/register/student`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "email": comp.state.username,
            "password": comp.state.password,
            "first_name": comp.state.firstname,
            "last_name": comp.state.lastname
        })
    }).then((response) => {
        if (response.status === 200) {
            // status code 200, return the response body
            return response.json()              
        } else {
            // received a code other than 200
            alert(response.status + ' ' + response.statusText)
        }
    }).then((json) => {
        if (json === undefined) {
            // status code was not 200
            return
        }
        if (json.email !== undefined) {
            // successful login from the server. we have the id and access tokens now
            alert('Signed up as: ' + json.email)
            window.location.href = '/login'
        } else if (json[0].msg !== undefined && json[0].param !== undefined) {
            // alert the user of what went wrong, if we can
            const msg = json[0].msg + ' for ' + json[0].param
            alert(msg)
        }
    }).catch((error) => { 
        // log any errors to the console
        console.log(error)
    })
}

/* A function to send a POST request to register a new business account. */
export const registerBusiness = (comp, event) => {
    event.preventDefault()
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert('Passwords do not match.')
        return
    }
    // make a call to the server API to register a business account
    fetch(`${API_HOST}/auth/register/business`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "email": comp.state.username,
            "password": comp.state.password,
            "name": comp.state.name,
            "location": comp.state.location, 
            "type": comp.state.category
        })
    }).then((response) => {
        if (response.status === 200) {
            // status code 200, return the response body
            return response.json()              
        } else {
            // received a code other than 200
            alert(response.status + ' ' + response.statusText)
        }
    }).then((json) => {
        if (json === undefined) {
            // status code was not 200
            return
        }
        if (json.email !== undefined) {
            // successful login from the server. we have the id and access tokens now
            alert('Signed up as: ' + json.email)
            window.location.href = '/login'
        } else if (json[0].msg !== undefined && json[0].param !== undefined) {
            // alert the user of what went wrong, if we can
            const msg = json[0].msg + ' for ' + json[0].param
            alert(msg)
        }
    }).catch((error) => { 
        // log any errors to the console
        console.log(error)
    })
}

/* A function to send a POST request to log a user in. */
export const login = (comp, event) => {
    event.preventDefault()
    // figure out whether we are to log in as a student or business
    let url
    if (comp.state.type === 'student') {
        url = `${API_HOST}/auth/login/student`
    } else {
        url = `${API_HOST}/auth/login/business`
    }
    // make a call to the server API to login
    fetch(url, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            "email": comp.state.username,
            "password": comp.state.password,
        })
    }).then((response) => { 
        if (response.status === 200) {
            // status code 200, return the response body
            return response.json()              
        } else {
            // received a code other than 200
            alert(response.status + ' ' + response.statusText)
        }
    }).then((json) => {
        if (json === undefined) {
            // status code was not 200
            return
        }
        if (json.id !== undefined) {
            // successful login from the server. we have the id and access tokens now
            alert('Current logged in user: ' + json.id)
            window.location.href = '/'
        } else if (json[0].msg !== undefined && json[0].param !== undefined) {
            // alert the user of what went wrong, if we can
            const msg = json[0].msg + ' for ' + json[0].param
            alert(msg)
        }
    }).catch((error) => { 
        // log any errors to the console
        console.log(error)
    })
}