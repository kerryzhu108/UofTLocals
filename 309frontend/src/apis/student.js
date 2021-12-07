import { domain, headers } from "./headers.js";

/* A function to send a GET request to get all comments made by a user. */
export const getComments = async (id) => {
    try {
        // make a call to the server API to get all comments of the current user
        let response = await fetch(`${domain}comment/student/${id}`, {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default"
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
    } 
}

/* A function to send a PATCH request to update a student user's account. */
export const updateProfile = async (comp, event, access_token) => {
    event.preventDefault()
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert('Passwords do not match.')
        return
    }
    try {
        // make a call to the server API to edit the profile of this student
        await fetch(`${domain}student`, {
            method: "PATCH",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${access_token}`,
            },
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                "username": comp.state.username,
                "first_name": comp.state.firstname,
                "last_name": comp.state.lastname,
                "email": comp.state.email
            })
        })
    } catch (error) {
        console.log(error)
    }
}