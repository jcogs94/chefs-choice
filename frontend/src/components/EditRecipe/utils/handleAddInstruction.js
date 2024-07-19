const handleAddInstruction = (newRecipe, setNewRecipe, errors, setErrors) => {
    setNewRecipe({
        ...newRecipe,
        instructions: [...newRecipe.instructions, '']
    })

    setErrors({
        ...errors,
        instructions: [...errors.instructions, '']
    })
}

export default handleAddInstruction
