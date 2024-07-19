import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import * as recipeService from '../../services/recipeService.js'
import handleDelete from './utils/handleDelete.js'
import './ShowRecipe.css'

const ShowRecipe = () => {
    const { recipeId } = useParams()
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState({
        id: 0,
        name: '',
        style: '',
        time_to_complete: '',
        description: '',
        img_ref: 'none',
        ingredients: [],
        instructions: []
    })

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const foundRecipe = await recipeService.show(recipeId)
                if (foundRecipe.error) {
                    throw new Error(foundRecipe.error)
                } else {
                    setRecipe(foundRecipe)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchRecipe()
    }, [])

    return <>
        <div id="recipe-heading">
            <h1>{recipe.name}</h1>
            <p><i>{recipe.style}</i></p>
            <p><b>Total Time:</b> {recipe.time_to_complete}</p>
        </div>
        <div id="recipe-content">
            { recipe.img_ref !== 'none'
                ? <img src={recipe.img_ref} alt={recipe.name} />
                : <div id='placeholder-img-container'><div>No Image</div></div>
            }
            <p><i>{recipe.description}</i></p>
            <div id="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map( (ingredient, index) => 
                        <li key={`ingredient-${index}`}>{ingredient}</li>
                    )}
                </ul>
            </div>
            <div id="instructions">
                <h2>Instructions</h2>
                <ol id="instructions-list">
                    {recipe.instructions.map( (instruction, index) => 
                        <li key={`instruction-${index}`}>{instruction}</li>
                    )}
                </ol>
            </div>
        </div>
        <div id="recipe-management">
            <div id='edit-recipe'>
                <p>Need to Change something?</p>
                <Link to={`/recipes/${recipeId}/edit`}><button id='edit-recipe-button'>Edit Recipe</button></Link>
            </div>
            <div id='delete-recipe'>
                <p>Really hate this recipe and want to delete it?</p>
                <button id='delete-recipe-button' onClick={() => handleDelete(recipeId, navigate)}>Delete Recipe</button>
            </div>
        </div>
    </>
}

export default ShowRecipe
