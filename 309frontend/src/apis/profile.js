import {domain} from "./headers";
import Cookies from 'universal-cookie';

// Fetch user profile information using stored access token
export async function getProfile() {
    try {
        const cookies = new Cookies();
        const response = await fetch(domain + "auth/profile", {
            method: "GET",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookies.get("access_token")}`
            }
        });
        
        // TODO: Handle these statuses a little better
        if (response.status !== 200) {
            console.log("Invalid access token provided to server.");
            return;
        }

        const response_json = await response.json();
        return response_json;
    } catch (error) {
        console.log(error);
    }
}