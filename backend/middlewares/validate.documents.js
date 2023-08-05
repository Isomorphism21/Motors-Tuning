import { validationResult } from "express-validator";

const validateDocument = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default validateDocument;