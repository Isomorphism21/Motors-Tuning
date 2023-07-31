import bujias from "../models/Bujias.model.js";

const getbujiasAll = async (req, res) => {
    try {
        const datos = await bujias.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postbujias = async (req, res) => {
    try {
        const bujiasBody = new bujias(req.body);
        const nuevabujias = await bujiasBody.save();
        res.json(nuevabujias);
    } catch (error) {
        console.log(error);
    }
}

const deletebujias = async (req, res) => {
    try {
        await bujias.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatebujias = async (req, res) => {
    try {
        const bujiasBody = await bujias.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await bujiasBody.save();
        res.json(bujiasBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnebujias = async (req, res) => {
    try {
        const datos = await bujias.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getbujiasAll,
    postbujias, 
    deletebujias, 
    updatebujias,
    getOnebujias
}