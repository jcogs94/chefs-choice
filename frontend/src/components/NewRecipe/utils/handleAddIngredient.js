const handleAddIngredient = (newRecipe, setNewRecipe) => {
    setNewRecipe({
        ...newRecipe,
        ingredients: [...newRecipe.ingredients, '']
    })
}

export default handleAddIngredient
