import checkErrors from "./checkErrors.js"

const handleInstructionChange = (event, newRecipe, setNewRecipe, errors, setErrors) => {
    let index = parseInt(event.target.name[event.target.name.length - 1])
    
    let newInstructions = [...newRecipe.instructions]
    newInstructions[index] = event.target.value
    
    setNewRecipe({
        ...newRecipe,
        instructions: newInstructions
    })

    checkErrors(event, errors, setErrors)
}

export default handleInstructionChange
