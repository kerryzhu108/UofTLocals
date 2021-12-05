import Cookies from "universal-cookie";

const API_HOST = "http://localhost:5000";

/* A function to update the login form. */
export const updateLoginForm = (comp, field) => {
    const value = field.value;
    const name = field.name;
    comp.setState({ [name]: value });
};

/* A function to send a POST request to register a new student account. */
export const registerStudent = (comp, event) => {
    event.preventDefault();
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert("Passwords do not match.");
        return;
    }
    // make a call to the server API to register a student
    fetch(`${API_HOST}/auth/register/student`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify({
            username: comp.state.username,
            password: comp.state.password,
            first_name: comp.state.firstname,
            last_name: comp.state.lastname,
        }),
    })
        .then((response) => {
            if (response.status === 200) {
                // status code 200, return the response body
                return response.json();
            } else {
                // received a code other than 200
                alert(response.status + " " + response.statusText);
            }
        })
        .then((json) => {
            if (json === undefined) {
                // status code was not 200
                return;
            }
            if (json.username !== undefined) {
                // successful login from the server. we have the id and access tokens now
                alert("Signed up as: " + json.username);
                window.location.href = "/login";
            } else if (
                json[0].msg !== undefined &&
                json[0].param !== undefined
            ) {
                // alert the user of what went wrong, if we can
                const msg = json[0].msg + " for " + json[0].param;
                alert(msg);
            }
        })
        .catch((error) => {
            // log any errors to the console
            console.log(error);
        });
};

/* A function to send a POST request to register a new business account. */
export const registerBusiness = (comp, event) => {
    event.preventDefault();
    // make sure the given password and confirmation match
    if (comp.state.password !== comp.state.confirmation) {
        alert("Passwords do not match.");
        return;
    }
    // make a call to the server API to register a business account
    fetch(`${API_HOST}/auth/register/business`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify({
            name: comp.state.name,
            username: comp.state.username,
            password: comp.state.password,
            desc: comp.state.description,
        }),
    })
        .then((response) => {
            if (response.status === 200) {
                // status code 200, return the response body
                return response.json();
            } else {
                // received a code other than 200
                alert(response.status + " " + response.statusText);
            }
        })
        .then((json) => {
            if (json === undefined) {
                // status code was not 200
                return;
            }
            if (json.username !== undefined) {
                // successful login from the server. we have the id and access tokens now
                alert("Signed up as: " + json.username);
                window.location.href = "/login";
            } else if (
                json[0].msg !== undefined &&
                json[0].param !== undefined
            ) {
                // alert the user of what went wrong, if we can
                const msg = json[0].msg + " for " + json[0].param;
                alert(msg);
            }
        })
        .catch((error) => {
            // log any errors to the console
            console.log(error);
        });
};

/* A function to send a POST request to log a user in. */
export const login = (comp, event) => {
    event.preventDefault();
    // figure out whether we are to log in as a student or business
    let url;
    if (comp.state.type === "student") {
        url = `${API_HOST}/auth/login/student`;
    } else {
        url = `${API_HOST}/auth/login/business`;
    }
    // make a call to the server API to login
    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify({
            username: comp.state.username,
            password: comp.state.password,
        }),
    })
        .then((response) => {
            if (response.status === 200) {
                // status code 200, return the response body
                return response.json();
            } else {
                // received a code other than 200
                alert(response.status + " " + response.statusText);
            }
        })
        .then((json) => {
            if (json === undefined) {
                // status code was not 200
                return;
            }
            if (json.tokens !== undefined) {
                // successful login from the server. we have the id and access tokens now
                // Store received access token in cookie
                const cookies = new Cookies();
                cookies.set("access_token", json.tokens.access, { path: "/" });

                alert("You are being logged in as: " + json.tokens.access);
                window.location.href = "/";
            } else if (
                json[0].msg !== undefined &&
                json[0].param !== undefined
            ) {
                // alert the user of what went wrong, if we can
                const msg = json[0].msg + " for " + json[0].param;
                alert(msg);
            }
        })
        .catch((error) => {
            // log any errors to the console
            console.log(error);
        });
};

/* A function to send a GET request to check which user is logged in. */
export const checkSession = () => {
    const url = `${API_HOST}/auth/check-session`;
    fetch(url)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then((json) => {
            console.log(json);
            alert("stop");
            if (json && json.user) {
                return json.user;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

/* A function to send a GET request to log the current user out. */
export const logout = () => {
    const url = `${API_HOST}/auth/logout`;
    fetch(url)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then((json) => {
            console.log(json);
            alert("stop");
            if (json && json.user) {
                return json.user;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
