import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import * as recipeService from '../../services/recipeService.js'
import handleChange from './utils/handleChange.js'
import handleIngredientChange from './utils/handleIngredientChange.js'
import handleAddIngredient from './utils/handleAddIngredient.js'
import handleRemoveIngredient from './utils/handleRemoveIngredient.js'
import handleInstructionChange from './utils/handleInstructionChange.js'
import handleAddInstruction from './utils/handleAddInstruction.js'
import handleRemoveInstruction from './utils/handleRemoveInstruction.js'
import handleSubmit from './utils/handleSubmit.js'
import './EditRecipe.css'

const EditRecipe = () => {
    const { recipeId } = useParams()
    const initForm = {
        name: '',
        style: '',
        time_to_complete: '',
        description: '',
        img_ref: '',
        ingredients: [''],
        instructions: ['']
    }
    
    const [addImg, setAddImg] = useState(false)
    const [errors, setErrors] = useState(initForm)
    const [editRecipe, setEditRecipe] = useState({
        ...initForm,
        img_ref: 'none'
    })

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const foundRecipe = await recipeService.show(recipeId)
                if (foundRecipe.error) {
                    throw new Error(foundRecipe.error)
                } else {
                    setEditRecipe(foundRecipe)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchRecipe()
    }, [])
    
    const navigate = useNavigate()
    const formHasMissingData = !Object.values(editRecipe).every(Boolean)
    const formIsInvalid = Object.values(errors).some(
        (error) => error && (Array.isArray(error) ? error.some(Boolean) : true)
      );
    
    return <>
        <h1 id='new-recipe-heading'>Edit Your Recipe</h1>
        <form onSubmit={(e) => handleSubmit(e, editRecipe, navigate)} id='new-recipe-form'>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" value={editRecipe.name}
                    onChange={(e) => handleChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                { errors.name && <p className='error'>{errors.name}</p> }
            </div>
            <div>
                <label htmlFor="style">Style:</label>
                <input id="style" name="style" type="text" value={editRecipe.style}
                    onChange={(e) => handleChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                { errors.style && <p className='error'>{errors.style}</p> }
            </div>
            <div>
                <label htmlFor="time_to_complete">Total Time:</label>
                <input id="time_to_complete" name="time_to_complete" type="text"
                    value={editRecipe.time_to_complete}
                    onChange={(e) => handleChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                { errors.time_to_complete && <p className='error'>{errors.time_to_complete}</p> }
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" rows="8"
                    value={editRecipe.description}
                    onChange={(e) => handleChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                { errors.description && <p className='error'>{errors.description}</p> }
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <div id='new-ingredients' name='ingredients'>
                    {editRecipe.ingredients.map( (ingredient, index) =>
                        <div key={`ingredient-${index}`}>
                            <div className="ingredient-input">
                                <input id={`ingredients-${index}`} name={`ingredients-${index}`}
                                    type="text" value={editRecipe.ingredients[index]}
                                    onChange={(e) => handleIngredientChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                                <div className="remove-ingredient">
                                    <button onClick={() => handleRemoveIngredient(index, editRecipe, setEditRecipe, errors, setErrors)}
                                        >X</button>
                                </div>
                            </div>
                            { errors.ingredients[index] && <p className='error' key={`ingredient-error-${index}`}>{errors.ingredients[index]}</p> }
                        </div>
                    )}
                </div>
                <button className='add-element-button' type='button'
                    onClick={() => handleAddIngredient(editRecipe, setEditRecipe, errors, setErrors)}
                    >Add Ingredient</button>
            </div>
            <div>
                <label htmlFor="instructions">Instructions:</label>
                <div id='new-instructions' name='instructions'>
                    {editRecipe.instructions.map( (instruction, index) =>
                        <div key={`instruction-${index}`}>
                            <div className="instruction-input">
                                <textarea id={`instructions-${index}`} name={`instructions-${index}`}
                                    rows="4" value={editRecipe.instructions[index]}
                                    onChange={(e) => handleInstructionChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                                <div className="remove-instruction">
                                    <button onClick={() => handleRemoveInstruction(index, editRecipe, setEditRecipe, errors, setErrors)}
                                        >X</button>
                                </div>
                            </div>
                            { errors.instructions[index] && <p className='error' key={`instruction-error-${index}`}>{errors.instructions[index]}</p> }
                        </div>
                    )}
                </div>
                <button className='add-element-button' type='button'
                    onClick={() => handleAddInstruction(editRecipe, setEditRecipe, errors, setErrors)}
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
                                value={editRecipe.img_ref === 'none' ? '' : editRecipe.img_ref}
                                onChange={(e) => handleChange(e, editRecipe, setEditRecipe, errors, setErrors)} />
                            { errors.img_ref && <p className='error'>{errors.img_ref}</p> }
                        </div>
                    : null }
            </div>
            <button type='submit' disabled={formIsInvalid || formHasMissingData}>Update Recipe</button>
        </form>
    </>
}

export default EditRecipe
