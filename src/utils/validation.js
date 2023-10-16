export const validateRequired = (value) => {
    return !!value
}

export const validateRequiredNumberField = (value) => {
    return value > 0
}

export const validateRequiredArrayField = (value) => {
    return value.length > 0
}