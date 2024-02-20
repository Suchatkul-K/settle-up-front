import Joi from "joi"
import validate from "../../../utils/validate"

const addBotSchema = Joi.object({
    botName: Joi.string().required().messages({
        'string.empty': 'Member name is required'
    }),
})

const validateAddBot = input => validate(addBotSchema)(input);
export default validateAddBot;