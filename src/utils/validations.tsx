
// input is valid
export const IsInputNotNull = (value: any) => {
    return (value.length > 3);
}

// email is valid
export const IsEmailValid = (value: any) => {
    return (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
}

// website is valid
export const IsWebValid = (value: any) => {
    return (value.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/));
}

