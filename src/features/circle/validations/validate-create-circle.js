import Joi from "joi"
import validate from "../../../utils/validate"

const createCircleSchema = Joi.object({
    circleName: Joi.string().required().messages({
        'string.empty': 'Circle name is required'
    }),
})

const validateCreateCircle = input => validate(createCircleSchema)(input);
export default validateCreateCircle;