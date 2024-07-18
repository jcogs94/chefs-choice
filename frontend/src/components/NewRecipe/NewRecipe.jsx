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
    const [addImg, setAddImg] = useState(false)
        
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
                <input id="time_to_complete" name="time_to_complete" type="text"
                    value={newRecipe.time_to_complete}
                    onChange={(e) => handleChange(e, newRecipe, setNewRecipe)} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input id="description" name="description" type="text"
                    value={newRecipe.description}
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
            <div>
                <div id="add-img-prompt">
                    <label htmlFor="add-img-radio-buttons">Add image?</label>
                    <div id="add-img-radio-buttons">
                        <input type="radio" name="add-img" id="add-img-yes"
                            onChange={() => setAddImg(true)} />
                        <label htmlFor="add-img-yes">Yes</label>
                        <input type="radio" name="add-img" id="add-img-no"
                            defaultChecked
                            onChange={() => setAddImg(false)} />
                        <label htmlFor="add-img-no">No</label>
                    </div>
                </div>
                {addImg
                    ? <div id='add-img-input'>
                        <label htmlFor="img_ref">Image URL:</label>
                        <input id="img_ref" name="img_ref" type="text"
                            value={newRecipe.img_ref === 'none' ? '' : newRecipe.img_ref}
                            onChange={(e) => handleChange(e, newRecipe, setNewRecipe)} />
                        {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
                    </div> : null
                }
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    </>
}

export default NewRecipe
