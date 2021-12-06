import { domain, headers } from "../apis/headers.js";

//Gets all approved businesses
export async function getBusinesses() {
    try {
        let response = await fetch(domain + "business/all", {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default",
        });
        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Get single business by id
export async function getBusiness(id) {
    try {
        let response = await fetch(domain + `business/${id}`, {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default",
        });

        // Return null if the given ID is not associated with an existing business
        if (response.status !== 200) return null;

        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Get all user comments on a specific business given the id
export async function getBusinessComments(id) {
    try {
        let response = await fetch(domain + `comment/business/${id}`, {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default",
        });

        if (response.status !== 200) return null;

        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Get all announcements from a single business given its id
export async function getBusinessAnnouncements(id) {
    try {
        let response = await fetch(domain + `announcement/${id}`, {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default",
        });

        if (response.status !== 200) return null;
        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Add comment to business profile (requires a student access token)
export async function commentOnBusiness(id, content, access_token) {
    try {
        var response = await fetch(domain + `comment/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                content: content,
            }),
        });

        if (response.status !== 200) return null;

        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Add announcement to business profile (requires a business access token)
export async function addBusinessAnnouncement(content, access_token) {
    try {
        let response = await fetch(domain + "announcement", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                content: content,
            }),
        });

        if (response.status !== 200) return null;

        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

//Gets all approved announcements
export async function getAnnouncements() {
    try {
        let response = await fetch(domain + "business/allannouncements", {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default",
        });
        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Deletes a singular business
export async function deleteBusiness(bid) {
    try {
        fetch(domain + "business/deletebusiness/" + bid, {
            method: "DELETE",
            headers: headers,
            mode: "cors",
            cache: "default",
        }).then((response) => {
            return response;
        });
    } catch (error) {
        console.log(error);
    }
}

// Deletes a singular post from the business and announcements folder
export async function deletePost(bid, pid) {
    try {
        fetch(domain + "business/delete/" + bid + "/" + pid, {
            method: "DELETE",
            headers: headers,
            mode: "cors",
            cache: "default",
        }).then((response) => {
            return response;
        });
    } catch (error) {
        console.log(error);
    }
}

// Deletes a posting from the announcement folder only (used when the corresponding business is already deleted)
export async function deleteIndPost(pid) {
    try {
        fetch(domain + "business/delete/" + pid, {
            method: "DELETE",
            headers: headers,
            mode: "cors",
            cache: "default",
        }).then((response) => {
            return response;
        });
    } catch (error) {
        console.log(error);
    }
}

// Change business description (requires a business access token)
// Business profile need to only show when business is owner of that profile
export async function changeBusinessDescription(content, access_token) {
    try {
        let response = await fetch(domain + "business", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
            mode: "cors",
            cache: "default",
            body: JSON.stringify({
                content: content,
            }),
        });

        if (response.status !== 200) return null;

        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}