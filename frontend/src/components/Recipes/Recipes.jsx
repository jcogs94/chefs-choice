import RecipeCard from './RecipeCard/RecipeCard.jsx'
import './Recipes.css'

const Recipes = () => {
    const testRecipe = {
        id: 2,
        name: "Spaghetti",
        style: "Italian",
        time_to_complete: "30 mins",
        description: "The BEST meal for the whole family!",
        img_ref: "https://www.inspiredtaste.net/wp-content/uploads/2023/01/Spaghetti-with-Meat-Sauce-Recipe-Video.jpg",
        ingredients: [
            "3/4 cups of maranara sauce",
            "3 cups of ground beef",
            "1/2 tbs of salt"
        ],
        instructions: [
            "Fill pot with water and bring to rolling boil.",
            "Add salt to boiling water.",
            "Place pasta into pot and allow to cook for 8 minutes."
        ]
    }

    const testRecipes = [
        {...testRecipe}, {...testRecipe},
        {...testRecipe}, {...testRecipe},
        {...testRecipe}, {...testRecipe}
    ]
    
    return <>
        <h1 id='recipes-header'>Recipes</h1>
        <div id="recipes-container">
            {testRecipes.map( (recipe, index) => 
                <RecipeCard recipe={recipe} key={index} />
            )}
        </div>
    </>
}

export default Recipes
