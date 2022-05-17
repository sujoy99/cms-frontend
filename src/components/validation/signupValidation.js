const signupValidation = (values) => {

    const errors = {}
    
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 3){
        errors.password = "Password must be more than three characters"
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Confirm Password is required"
    }else if(values.password !== values.confirmPassword){
        errors.confirmPassword = "Password is missmatched"
    }

    return errors;
}

export default signupValidation
