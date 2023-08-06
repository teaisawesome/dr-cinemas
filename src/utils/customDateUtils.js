const formatDateToISO = function (date) {
    return new Date(date).toISOString().substring(0, 10)
}

export default formatDateToISO