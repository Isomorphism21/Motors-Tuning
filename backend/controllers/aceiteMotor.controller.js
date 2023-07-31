import AceiteMotor from "../models/AceiteMotor.model.js";

const getAceiteMotorAll = async (req, res) => {
    try {
        const datos = await AceiteMotor.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postAceiteMotor = async (req, res) => {
    try {
        const AceiteMotorBody = new AceiteMotor(req.body);
        const nuevoAceiteMotorBody = await AceiteMotorBody.save();
        res.json(nuevoAceiteMotorBody);
    } catch (error) {
        console.log(error);
    }
}

const deleteAceiteMotor = async (req, res) => {
    try {
        await AceiteMotor.deleteOne({_id:req.params.id})
        res.status(400).send();
    } catch (error) {
        console.log(error);
    }
}

const updAceiteMotor = async (req, res) => {
    try {
        const AceiteMotorBody = await AceiteMotor.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await AceiteMotorBody.save();
        res.json(AceiteMotorBody);
    } catch (error) {
        console.log(error);
    }
}

const getOneAceiteMotor = async (req, res) => {
    try {
        const datos = await AceiteMotor.findOne({_di:req.params.id})
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getAceiteMotorAll,
    postAceiteMotor,
    deleteAceiteMotor,
    updAceiteMotor,
    getOneAceiteMotor
}