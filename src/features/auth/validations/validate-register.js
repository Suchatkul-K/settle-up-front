import Joi from "joi"
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
    username: Joi.string().trim().required().messages({
        'string.empty': 'username is required'
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.empty': 'email is required',
        'string.email': 'invalid email pattern'
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6}/).required().messages({
        'string.empty': 'password is required',
        'string.pattern.base' : 'password must be atleast 6 charecters and contain only alphabet and number'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    .messages({
        'string.empty': 'confirm password is required',
        'any.only' : 'confirm password does not matched'
    }),
})

const validateRegister = input => validate(registerSchema)(input);
export default validateRegister;