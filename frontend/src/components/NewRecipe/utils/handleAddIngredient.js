const handleAddIngredient = (newRecipe, setNewRecipe, errors, setErrors) => {
    setNewRecipe({
        ...newRecipe,
        ingredients: [...newRecipe.ingredients, '']
    })

    setErrors({
        ...errors,
        ingredients: [...errors.ingredients, '']
    })
}

export default handleAddIngredient
