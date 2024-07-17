import { useParams } from 'react-router-dom'
import './ShowRecipe.css'

const ShowRecipe = () => {
    const { recipeId } = useParams()
    
    return <>
        <h1>Recipe ID: {recipeId}</h1>
    </>
}

export default ShowRecipe
