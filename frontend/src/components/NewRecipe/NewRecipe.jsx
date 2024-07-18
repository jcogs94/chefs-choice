import { useState } from 'react'
import './NewRecipe.css'

const NewRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        style: '',
        time_to_complete: '',
        description: '',
        img_ref: 'none',
        ingredients: [],
        instructions: []
    })
    
    const handleChange = (event) => {
        setNewRecipe({
            ...newRecipe,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return <>
        <h1 id='new-recipe-heading'>Add Your Recipe</h1>
        <form onSubmit={handleSubmit} id='new-recipe-form'>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text"
                    value={newRecipe.name} onChange={handleChange} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="style">Style:</label>
                <input id="style" name="style" type="text"
                    value={newRecipe.style} onChange={handleChange} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="time_to_complete">Total Time:</label>
                <input id="time_to_complete" name="time_to_complete" type="text"
                    value={newRecipe.time_to_complete} onChange={handleChange} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input id="description" name="description" type="text"
                    value={newRecipe.description} onChange={handleChange} />
                {/* { errors.firstName && <p className='error'>{errors.firstName}</p> } */}
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    </>
}

export default NewRecipe
