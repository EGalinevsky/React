export const required = (value) => {
    if (value) {
        return undefined
    } else {
        return 'error message';
    }
}



export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else {
        return undefined;
    }
}