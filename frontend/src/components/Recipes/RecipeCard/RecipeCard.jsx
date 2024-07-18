import { Link } from 'react-router-dom'
import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
    return <>
        <div className="recipe-card">
            <Link to={`/recipes/${recipe.id}`}><h2>{recipe.name}</h2></Link>
            <p><b>Total Time:</b> {recipe.time_to_complete}</p>
            { recipe.img_ref !== 'none'
                ? <img src={recipe.img_ref} alt={recipe.name} />
                : <div className="no-img">No Image</div>
            }
            <p>{recipe.description}</p>
        </div>
    </>
}

export default RecipeCard
