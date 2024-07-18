const handleIngredientChange = (event, newRecipe, setNewRecipe) => {
    let index = parseInt(event.target.name[event.target.name.length - 1])
    
    let newIngredients = [...newRecipe.ingredients]
    newIngredients[index] = event.target.value
    
    setNewRecipe({
        ...newRecipe,
        ingredients: newIngredients
    })
}

export default handleIngredientChange
