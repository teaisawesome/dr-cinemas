const sortedArrayByObjProp = function(array, propertyBy) {
    return [...array].sort((a, b) => a[propertyBy].localeCompare(b[propertyBy]))
}

export default sortedArrayByObjProp