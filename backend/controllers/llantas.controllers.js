import llantas from "../models/Llantas.model.js";

const getllantasAll = async (req, res) => {
    try {
        const datos = await llantas.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postllantas = async (req, res) => {
    try {
        const llantasBody = new llantas(req.body);
        const nuevallantas = await llantasBody.save();
        res.json(nuevallantas);
    } catch (error) {
        console.log(error);
    }
}

const deletellantas = async (req, res) => {
    try {
        await llantas.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatellantas = async (req, res) => {
    try {
        const llantasBody = await llantas.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await llantasBody.save();
        res.json(llantasBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnellantas = async (req, res) => {
    try {
        const datos = await llantas.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getllantasAll,
    postllantas, 
    deletellantas, 
    updatellantas,
    getOnellantas
}