import * as recipeService from '../../../services/recipeService.js'

const handleSubmit = async (event, newRecipe, navigate) => {
    event.preventDefault()
    
    await recipeService.create(newRecipe)
    
    navigate('/recipes')
}

export default handleSubmit
