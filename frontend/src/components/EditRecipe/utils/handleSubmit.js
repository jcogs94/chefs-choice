import * as recipeService from '../../../services/recipeService.js'

const handleSubmit = async (event, updatedRecipe, navigate) => {
    event.preventDefault()
    
    await recipeService.update(updatedRecipe.id, updatedRecipe)
    
    navigate('/recipes')
}

export default handleSubmit
