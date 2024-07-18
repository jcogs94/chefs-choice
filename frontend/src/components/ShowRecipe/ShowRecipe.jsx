import { useParams } from 'react-router-dom'
import './ShowRecipe.css'

const ShowRecipe = () => {
    const { recipeId } = useParams()
    
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

    return <>
        <div id="recipe-heading">
            <h1>{testRecipe.name}</h1>
            <p><i>{testRecipe.style}</i></p>
            <p><b>Total Time:</b> {testRecipe.time_to_complete}</p>
        </div>
        <div id="recipe-content">
            { testRecipe.img_ref !== 'none'
                ? <img src={testRecipe.img_ref} alt={testRecipe.name} />
                : null
            }
            <p><i>{testRecipe.description}</i></p>
            <div id="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {testRecipe.ingredients.map( (ingredient, index) => 
                        <li key={`ingredient-${index}`}>{ingredient}</li>
                    )}
                </ul>
            </div>
            <div id="instructions">
                <h2>Instructions</h2>
                <ol id="instructions-list">
                    {testRecipe.instructions.map( (instruction, index) => 
                        <li key={`instruction-${index}`}>{instruction}</li>
                    )}
                </ol>
            </div>
        </div>
    </>
}

export default ShowRecipe
