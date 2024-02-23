import Joi from "joi"
import validate from "../../../utils/validate"

const billSchema = Joi.object().keys({
    title: Joi.string().required().messages({
        'string.empty': 'title is required',
    }),
    creditor: Joi.array().min(1).messages({
        "array.min" : "Must include atleast 1 creditor"
    }),
    debtor: Joi.array().min(1).messages({
        "array.min" : "Must include atleast 1 debtor"
    }),
    summary: Joi.number().min(0).messages({
        "number.min" : "Bill summary must be match with expense"
    }),
    // billDate: Joi.date().iso()
}).unknown(true)

const validateBill = input => validate(billSchema)(input);
export default validateBill;