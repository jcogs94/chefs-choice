const handleChange = (event, newRecipe, setNewRecipe) => {
    setNewRecipe({
        ...newRecipe,
        [event.target.name]: event.target.value
    })
}

export default handleChange
