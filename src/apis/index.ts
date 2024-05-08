const BASE_URL = "https://next-api-barefoot.vercel.app/api";

export async function user_register(params: any) {
    try {
        return fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
        .then((res) => {
            return res.json();
        })
    } catch (err) {
        console.log(JSON.stringify(err));
    }
}

export async function user_login(params: any) {
    try {
        return fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
        .then((res) => {
            return res.json();
        })
    } catch (err) {
        console.log(JSON.stringify(err));
    }
}

export async function user_validation(params: any) {
    try {
        return fetch(`${BASE_URL}/user_validation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
        .then((res) => {
            return res.json();
        })
    } catch (err) {
        console.log(JSON.stringify(err));
    }
}

export async function logout(params: any) {
    try {
        return fetch(`${BASE_URL}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
        .then((res) => {
            return res.json();
        })
    } catch (err) {
        console.log(JSON.stringify(err));
    }
}


export async function event_regsitration(params: any) {
    try {
        return fetch(`${BASE_URL}/events/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
        .then((res) => {
            return res.json();
        })
    } catch (err) {
        console.log(JSON.stringify(err));
    }
}