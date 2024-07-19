import * as recipeService from '../../../services/recipeService.js'

const handleDelete = async (recipeId, navigate) => {
    await recipeService.destroy(recipeId)
    
    navigate('/recipes')
    navigate(0)
}

export default handleDelete
