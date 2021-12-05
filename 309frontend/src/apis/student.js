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