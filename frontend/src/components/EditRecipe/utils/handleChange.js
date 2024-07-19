import checkErrors from "./checkErrors.js"

const handleChange = (event, newRecipe, setNewRecipe, errors, setErrors) => {
    setNewRecipe({
        ...newRecipe,
        [event.target.name]: event.target.value
    })

    checkErrors(event, errors, setErrors)
}

export default handleChange
