import motorArranque from "../models/MotorArranque.model.js";

const getmotorArranqueAll = async (req, res) => {
    try {
        const datos = await motorArranque.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postmotorArranque = async (req, res) => {
    try {
        const motorArranqueBody = new motorArranque(req.body);
        const nuevamotorArranque = await motorArranqueBody.save();
        res.json(nuevamotorArranque);
    } catch (error) {
        console.log(error);
    }
}

const deletemotorArranque = async (req, res) => {
    try {
        await motorArranque.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatemotorArranque = async (req, res) => {
    try {
        const motorArranqueBody = await motorArranque.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await motorArranqueBody.save();
        res.json(motorArranqueBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnemotorArranque = async (req, res) => {
    try {
        const datos = await motorArranque.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getmotorArranqueAll,
    postmotorArranque, 
    deletemotorArranque, 
    updatemotorArranque,
    getOnemotorArranque
}