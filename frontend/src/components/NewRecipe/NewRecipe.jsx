import { useState } from 'react'
import handleChange from './utils/handleChange.js'
import handleIngredientChange from './utils/handleIngredientChange.js'
import handleAddIngredient from './utils/handleAddIngredient.js'
import handleRemoveIngredient from './utils/handleRemoveIngredient.js'
import handleInstructionChange from './utils/handleInstructionChange.js'
import handleAddInstruction from './utils/handleAddInstruction.js'
import handleRemoveInstruction from './utils/handleRemoveInstruction.js'
import handleSubmit from './utils/handleSubmit.js'
import './NewRecipe.css'

const NewRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        style: '',
        time_to_complete: '',
        description: '',
        img_ref: 'none',
        ingredients: [''],
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
                        <div className="ingredient-input">
                            <input id={`ingredients-${index}`} name={`ingredients-${index}`}
                                type="text" value={newRecipe.ingredients[index]}
                                onChange={(e) => handleIngredientChange(e, newRecipe, setNewRecipe)}
                                key={`ingredient-${index}`} />
                            <div className="remove-ingredient">
                                <button onClick={() => handleRemoveIngredient(index, newRecipe, setNewRecipe)}
                                    >X</button>
                            </div>
                            {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
                        </div>
                    )}
                </div>
                <button className='add-element-button'
                    onClick={() => handleAddIngredient(newRecipe, setNewRecipe)}
                    >Add Ingredient</button>
            </div>
            <div>
                <label htmlFor="instructions">Instructions:</label>
                <div id='new-instructions' name='instructions'>
                    {newRecipe.instructions.map( (instruction, index) =>
                        <div className="instruction-input">
                            <input id={`instructions-${index}`} name={`instructions-${index}`}
                                type="text" value={newRecipe.instructions[index]}
                                onChange={(e) => handleInstructionChange(e, newRecipe, setNewRecipe)}
                                key={`instruction-${index}`} />
                            <div className="remove-instruction">
                                <button onClick={() => handleRemoveInstruction(index, newRecipe, setNewRecipe)}
                                    >X</button>
                            </div>
                            {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
                        </div>
                    )}
                </div>
                <button className='add-element-button'
                    onClick={() => handleAddInstruction(newRecipe, setNewRecipe)}
                    >Add Instruction</button>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    </>
}

export default NewRecipe
