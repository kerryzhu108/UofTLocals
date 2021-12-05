import Cookies from 'universal-cookie';

import { domain, headers } from "./headers.js";

/* A function to update the login form. */
export const updateLoginForm = (comp, field) => {
    const value = field.value;
    const name = field.name;
    comp.setState({ [name]: value })
}

/* A function to send a POST request to register a new student account. */
export const registerStudent = async (comp, event) => {
    event.preventDefault()
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert('Passwords do not match.')
        return
    }
    try {
        // make a call to the server API to register a student
        console.log(comp.state )
        let response = await fetch(`${domain}auth/register/student`, {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                "username": comp.state.username,
                "password": comp.state.password,
                "first_name": comp.state.firstname,
                "last_name": comp.state.lastname,
                "email": comp.state.email
            })
        })
        if (response.status !== 200) {
            // received a code other than 200
            alert(response.status + ' ' + response.statusText)
            return
        }
        response = await response.json()
        if (response.username !== undefined) {
            // successful login from the server. we have the id and access tokens now
            alert('Signed up as: ' + response.username)
            window.location.href = '/login'
        } else if (response[0].msg !== undefined && response[0].param !== undefined) {
            // alert the user of what went wrong, if we can
            const msg = response[0].msg + ' for ' + response[0].param
            alert(msg)
        }
    } catch (error) {
        // log any errors to the console
        console.log(error)
    }
}

/* A function to send a POST request to register a new business account. */
export const registerBusiness = async (comp, event) => {
    event.preventDefault()
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert('Passwords do not match.')
        return
    }
    try {
        // make a call to the server API to register a business account
        let response = await fetch(`${domain}auth/register/business`, {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                "name": comp.state.name,
                "username": comp.state.username,
                "password": comp.state.password,
                "desc": comp.state.description,
                "email": comp.state.email
            })
        })
        if (response.status !== 200) {
            // received a code other than 200
            alert(response.status + ' ' + response.statusText)
            return
        }
        response = await response.json()
        if (response.username !== undefined) {
            // successful login from the server. we have the id and access tokens now
            alert('Signed up as: ' + response.username)
            window.location.href = '/login'
        } else if (response[0].msg !== undefined && response[0].param !== undefined) {
            // alert the user of what went wrong, if we can
            const msg = response[0].msg + ' for ' + response[0].param
            alert(msg)
        }
    } catch (error) {
        // log any errors to the console
        console.log(error)
    }
}

/* A function to send a POST request to log a user in. */
export const login = async (comp, event) => {
    event.preventDefault()
    // figure out whether we are to log in as a student or business
    const url = comp.state.type === 'student' ? `${domain}auth/login/student` : `${domain}auth/login/business`
    
    try {
        // make a call to the server API to login
        let response = await fetch(url, {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                "username": comp.state.username,
                "password": comp.state.password,
            })
        })
        if (response.status !== 200) {
            // received a code other than 200
            alert(response.status + ' ' + response.statusText)
            return
        }
        response = await response.json()
        if (response.tokens !== undefined) {
            // successful login from the server. we have the id and access tokens now
            // Store received access token in cookie
            const cookies = new Cookies();
            cookies.set("access_token", response.tokens.access, {path: "/"});
            alert('Success! You are being logged in as: ' + response.username)
            window.location.href = '/'
        } else if (response[0].msg !== undefined && response[0].param !== undefined) {
            // alert the user of what went wrong, if we can
            const msg = response[0].msg + ' for ' + response[0].param
            alert(msg)
        }
    } catch (error) {
        // log any errors to the console
        console.log(error)
    }
}
