const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// Returns all recipes
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// "Show" data for specific recipe
const show = async (recipeId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + recipeId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Creates new recipe
const create = async (data) => {
    try {
        await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
}

// Updates specific recipe
const update = async (recipeId, data) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + recipeId

    try {
        await fetch(REQ_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // data from param: { name: "value" }
        })
    } catch (err) {
        console.log(err)
    }
}

// Deletes specific recipe
const destroy = async (recipeId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + recipeId

    try {
        await fetch(REQ_URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export {
    index, show, create,
    destroy, update
}