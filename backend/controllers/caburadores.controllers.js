import carburadores from "../models/Carburadores.model.js";

const getcarburadoresAll = async (req, res) => {
    try {
        const datos = await carburadores.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postcarburadores = async (req, res) => {
    try {
        const carburadoresBody = new carburadores(req.body);
        const nuevacarburadores = await carburadoresBody.save();
        res.json(nuevacarburadores);
    } catch (error) {
        console.log(error);
    }
}

const deletecarburadores = async (req, res) => {
    try {
        await carburadores.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatecarburadores = async (req, res) => {
    try {
        const carburadoresBody = await carburadores.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await carburadoresBody.save();
        res.json(carburadoresBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnecarburadores = async (req, res) => {
    try {
        const datos = await carburadores.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getcarburadoresAll,
    postcarburadores, 
    deletecarburadores, 
    updatecarburadores,
    getOnecarburadores
}