const handleRemoveIngredient = (index, newRecipe, setNewRecipe, errors, setErrors) => {
    let newIngredients = [...newRecipe.ingredients]
    let newErrors = [...errors.ingredients]

    if (newIngredients.length > 1) {
        newIngredients.splice(index, 1)
        newErrors.splice(index, 1)
    
        setNewRecipe({
            ...newRecipe,
            ingredients: newIngredients
        })

        setErrors({
            ...errors,
            ingredients: newErrors
        })
    }
}

export default handleRemoveIngredient
