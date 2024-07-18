import { useState } from 'react'
import handleChange from './utils/handleChange.js'
import handleIngredientChange from './utils/handleIngredientChange.js'
import handleSubmit from './utils/handleSubmit.js'
import './NewRecipe.css'

const NewRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        style: '',
        time_to_complete: '',
        description: '',
        img_ref: 'none',
        ingredients: ['', '', ''],
        instructions: ['']
    })
        
    return <>
        <h1 id='new-recipe-heading'>Add Your Recipe</h1>
        <form onSubmit={(e) => handleSubmit(e, newRecipe, setNewRecipe)} id='new-recipe-form'>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" value={newRecipe.name}
                    onChange={(e) => handleChange(e, newRecipe, setNewRecipe)} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="style">Style:</label>
                <input id="style" name="style" type="text" value={newRecipe.style}
                    onChange={(e) => handleChange(e, newRecipe, setNewRecipe)} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="time_to_complete">Total Time:</label>
                <input id="time_to_complete" name="time_to_complete" type="text" value={newRecipe.time_to_complete}
                    onChange={(e) => handleChange(e, newRecipe, setNewRecipe)} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input id="description" name="description" type="text" value={newRecipe.description}
                    onChange={(e) => handleChange(e, newRecipe, setNewRecipe)} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <div id='new-ingredients' name='ingredients'>
                    {newRecipe.ingredients.map( (ingredient, index) =>
                        <input id={`ingredients-${index}`} name={`ingredients-${index}`} type="text"
                            value={newRecipe.ingredients[index]}
                            onChange={(e) => handleIngredientChange(e, newRecipe, setNewRecipe)}
                            key={`ingredient-${index}`} />,
                        {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
                    )}
                </div>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    </>
}

export default NewRecipe
