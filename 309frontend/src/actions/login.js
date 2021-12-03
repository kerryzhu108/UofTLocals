
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
    if (comp.state.password !== comp.state.confirmation) {
        alert('Passwords do not match!')
        return
    } else {
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
                "last_name": comp.state.lastname,
                "location": comp.state.location, 
                "category": comp.state.category
            })
        }).then((response) => { 
            if (response.status === 200) {
                window.location.href = '/login'
            } else {
                alert(response.statusText)
            }
        }).catch((error) => { 
            console.log(error)
        })
    }
}

/* A function to send a POST request to register a new business account. */
export const registerBusiness = (comp, event) => {
    event.preventDefault()
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
            "name": comp.state.name
        })
    }).then((response) => { 
        if (response.status === 200) {
            window.location.href = '/login'
        } else {
            alert(response.statusText)
        }
    }).catch((error) => { 
        console.log(error)
    })
}

/* A function to send a POST request to log a user in. */
export const login = (comp, event) => {
    event.preventDefault()
    fetch(`${API_HOST}/auth/login/student`, {
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
            window.location.href = '/'
        } else {
            alert(response.statusText)
        }
    }).catch((error) => { 
        console.log(error)
    })
}