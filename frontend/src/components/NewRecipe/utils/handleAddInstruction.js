const handleAddInstruction = (newRecipe, setNewRecipe) => {
    setNewRecipe({
        ...newRecipe,
        instructions: [...newRecipe.instructions, '']
    })
}

export default handleAddInstruction
