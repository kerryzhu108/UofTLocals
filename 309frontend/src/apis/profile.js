import { domain } from "./headers";

// Fetch user profile information using stored access token
export async function getProfile(access_token) {
    try {
        const response = await fetch(domain + "auth/profile", {
            method: "GET",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (response.status !== 200) {
            return null;
        }

        const response_json = await response.json();
        return response_json;
    } catch (error) {
        console.log(error);
    }
}
