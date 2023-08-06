import Motos from "../models/motos.models.js";

const getMotosAll = async (req, res) =>{
    try {
        const datos = await Motos.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postMotos = async (req, res) => {
    try {
        const motosBody = new Motos(req.body);
        const nuevoMotos = await motosBody.save();
        res.json(nuevoMotos);
    } catch (error) {
        console.log(error);
    }
}

const deleteMotos = async (req, res) =>{
    try {
        await Motos.deleteOne({_id:req.params.id});
        res.status(400).send();
    } catch (error) {
        console.log(error);
    }
}

const updMotos = async (req, res) =>{
    try {
        const mostosBody = await Motos.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await mostosBody.save();
        res.json(mostosBody);
    } catch (error) {
        console.log(error);
    }
}

const getMotosOne = async (req, res) => {
    try {
        const datos  = await Motos.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getMotosAll,
    postMotos,
    deleteMotos,
    updMotos,
    getMotosOne
};