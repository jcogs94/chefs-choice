const handleInstructionChange = (event, newRecipe, setNewRecipe) => {
    let index = parseInt(event.target.name[event.target.name.length - 1])
    
    let newInstructions = [...newRecipe.instructions]
    newInstructions[index] = event.target.value
    
    setNewRecipe({
        ...newRecipe,
        instructions: newInstructions
    })
}

export default handleInstructionChange
