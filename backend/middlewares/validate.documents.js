import { validationResult } from "express-validator";

<<<<<<< HEAD
const validateDocument = async (req, res, next) => {
    try {
        const errors = validationResult(req);
=======
const validateDocuments = (req, res, next) => {
    const errors = validationResult(req);
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
        next();
<<<<<<< HEAD
    } catch (error) {
        console.log(error);
    }
}

export default validateDocument;
=======
}

export default validateDocuments;
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
