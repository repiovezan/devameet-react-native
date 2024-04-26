const validateName = (name: string): boolean => {
    return name.length > 2 || !name
}

const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) || !email;
}

const validatePassword = (password: string): boolean => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{4,12}$/;
    return re.test(password) || !password;
}

const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
    return password == confirmPassword
}

const formIsComplete = (name: string, email: string, password: string, confirmPassword: string): boolean => {
    return name != '' && email != '' && password != '' && confirmPassword != ''
}

export { validateName, validateEmail, validatePassword, validateConfirmPassword, formIsComplete }