const handleRemoveInstruction = (index, newRecipe, setNewRecipe, errors, setErrors) => {
    let newInstructions = [...newRecipe.instructions]
    let newErrors = [...errors.instructions]

    if (newInstructions.length > 1) {
        newInstructions.splice(index, 1)
        newErrors.splice(index, 1)
    
        setNewRecipe({
            ...newRecipe,
            instructions: newInstructions
        })

        setErrors({
            ...errors,
            instructions: newErrors
        })
    }
}

export default handleRemoveInstruction
