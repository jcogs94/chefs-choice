import checkErrors from "./checkErrors.js"

const handleIngredientChange = (event, newRecipe, setNewRecipe, errors, setErrors) => {
    let index = parseInt(event.target.name[event.target.name.length - 1])
    
    let newIngredients = [...newRecipe.ingredients]
    newIngredients[index] = event.target.value
    
    setNewRecipe({
        ...newRecipe,
        ingredients: newIngredients
    })

    checkErrors(event, errors, setErrors)
}

export default handleIngredientChange
