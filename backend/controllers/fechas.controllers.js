import Fechas from "../models/fechas.model.js";
import mongoose from "mongoose";

const getFechasAll = async (req, res) => {
    try {
        const datos = await Fechas.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postFechas = async (req, res) => {
    try {
        const fechasBody = new Fechas(req.body);
        const nuevaFecha = await fechasBody.save();
        res.json(nuevaFecha);
    } catch (error) {
        console.log(error);
    }
}

const deleteFecha = async (req, res) => {
    try {
        await Fechas.deleteOne({_id:req.params.id});
        res.satatus(400).send();
    } catch (error) {
        console.log(error);
    }
}

const updFecha = async (req, res) => {
    try {
        const moto = await Fechas.findOne({_id:req.params.id});
        res.json(moto)
    } catch (error) {
        console.log(error);
    }
}

const getFechaOne = async (req, res) => {
    try {
        const motoId = new mongoose.Types.ObjectId(req.params.id);
        const datos = await Fechas.find({moto:motoId});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getFechasAll,
    postFechas,
    deleteFecha,
    updFecha,
    getFechaOne
}