const checkErrors = ({ target }, errors, setErrors) => {
    switch (target.name) {
        case 'name':
            setErrors({
                ...errors,
                name:
                    (target.value.length < 3 || target.value.length > 50)
                        ? (target.value.length < 3)
                            ? 'The name must be at least 3 characters.'
                            : 'The name cannot exceed 50 characters.'
                        : ''
            })
            break
        case 'style':
            setErrors({
                ...errors,
                style:
                    (target.value.length < 3 || target.value.length > 50)
                        ? (target.value.length < 3)
                            ? 'The style must be at least 3 characters.'
                            : 'The style cannot exceed 50 characters.'
                        : ''
            })
            break
        case 'time_to_complete':
            setErrors({
                ...errors,
                time_to_complete:
                    (target.value.length < 3 || target.value.length > 12)
                        ? (target.value.length < 3)
                            ? 'The total time must be at least 3 characters.'
                            : 'The total time cannot exceed 12 characters.'
                        : ''
            })
            break
        case 'description':
            setErrors({
                ...errors,
                description:
                    (target.value.length < 12 || target.value.length > 500)
                        ? (target.value.length < 12)
                            ? 'The description must be at least 12 characters.'
                            : 'The description cannot exceed 500 characters.'
                        : ''
            })
            break
        case 'img_ref':
            setErrors({
                ...errors,
                img_ref:
                    (target.value.length < 12 || target.value.length > 250)
                        ? (target.value.length < 12)
                            ? (target.value === 'none')
                                ? ''
                                : 'The image URL must be at least 12 characters.'
                            : 'The image URL cannot exceed 250 characters.'
                        :  ''
            })
            break
    }

    if (target.name.includes('ingredients')) {
        let index = parseInt(target.name[target.name.length - 1])
        let newIngredientErrors = [...errors.ingredients]
        
        newIngredientErrors[index] = (
            (target.value.length < 3 || target.value.length > 50)
                ? (target.value.length < 3)
                    ? 'Ingredients must be at least 3 characters.'
                    : 'Ingredients cannot exceed 50 characters.'
                : ''
        )

        setErrors({
            ...errors,
            ingredients: newIngredientErrors
        })
    }
    
    if (target.name.includes('instructions')) {
        let index = parseInt(target.name[target.name.length - 1])
        let newInstructionErrors = [...errors.instructions]

        newInstructionErrors[index] = (
            (target.value.length < 3 || target.value.length > 500)
                ? (target.value.length < 3)
                    ? 'Instructions must be at least 3 characters.'
                    : 'Instructions cannot exceed 500 characters.'
                : ''
        )

        setErrors({
            ...errors,
            instructions: newInstructionErrors
        })
    }
}

export default checkErrors
