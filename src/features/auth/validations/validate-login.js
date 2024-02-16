import Joi from "joi"
import validate from "../../../utils/validate"

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.empty': 'email is required',
        'string.email': 'invalid email pattern'
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6}/).required().messages({
        'string.empty': 'password is required',
        'string.pattern.base' : 'password must be atleast 6 charecters and contain only alphabet and number'
    }),
})

const validateLogin = input => validate(loginSchema)(input);
export default validateLogin;