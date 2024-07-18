const handleRemoveInstruction = (index, newRecipe, setNewRecipe) => {
    let newInstructions = [...newRecipe.instructions]

    if (newInstructions.length > 1) {
        newInstructions.splice(index, 1)
    
        setNewRecipe({
            ...newRecipe,
            instructions: newInstructions
        })
    }
}

export default handleRemoveInstruction
