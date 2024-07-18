const handleRemoveIngredient = (index, newRecipe, setNewRecipe) => {
    let newIngredients = [...newRecipe.ingredients]

    if (newIngredients.length > 1) {
        newIngredients.splice(index, 1)
    
        setNewRecipe({
            ...newRecipe,
            ingredients: newIngredients
        })
    }
}

export default handleRemoveIngredient
