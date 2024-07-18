import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as recipeService from '../../services/recipeService.js'
import RecipeCard from './RecipeCard/RecipeCard.jsx'
import './Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

  // Loads index from API on page load
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const allRecipes = await recipeService.index()
        if (allRecipes.error) {
          throw new Error(allRecipes.error)
        } else {
          setRecipes(allRecipes)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchRecipes()
  }, [])
    
    return <>
        <h1 id='recipes-header'>Recipes</h1>
        <div id="add-recipe-here-container">
          <p>Add your own recipe here:</p>
          <Link to="/recipes/new"><button>Add Recipe</button></Link>
        </div>
        <div id="recipes-container">
            {recipes.map( (recipe, index) => 
                <RecipeCard recipe={recipe} key={index} />
            )}
        </div>
    </>
}

export default Recipes
