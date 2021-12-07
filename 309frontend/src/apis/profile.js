import { domain } from "./headers";

// Fetch user profile information using stored access token
export async function getProfile(access_token) {
    try {
        if (!access_token) {
            return null
        }
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

// Upload profile image for user or business
export async function uploadImage(imageData, userType, userID) {
    try {
        const response = await fetch(domain + userType + "/image/" + userID, {
            method: "POST",
            mode: "cors",
            body: imageData
        });
        const response_json = await response.json();
        return response_json;
    } catch (error) {
        console.log(error);
    }
}
