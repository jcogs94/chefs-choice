import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
    return <>
        <div className="recipe-card">
            <h2>{recipe.name}</h2>
            <p><b>Total Time:</b> {recipe.time_to_complete}</p>
            { recipe.img_ref !== 'none'
                ? <img src={recipe.img_ref} alt={recipe.name} />
                : null
            }
            <p>{recipe.description}</p>
        </div>
    </>
}

export default RecipeCard
