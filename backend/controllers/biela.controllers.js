import Biela from "../models/Biela.models.js";

const getBielaAll = async (req, res) => {
    try {
        const datos = await Biela.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postBiela = async (req, res) => {
    try {
        const bielaBody = new Biela(req.body);
        const nuevaBiela = await bielaBody.save();
        res.json(nuevaBiela);
    } catch (error) {
        console.log(error);
    }
}

const deleteBiela = async (req, res) => {
    try {
        await Biela.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updateBiela = async (req, res) => {
    try {
        const BielaBody = await Biela.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await BielaBody.save();
        res.json(BielaBody);
    } catch (error) {
        console.log(error);
    }
}

const getOneBiela = async (req, res) => {
    try {
        const datos = await Biela.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getBielaAll,
    postBiela, 
    deleteBiela, 
    updateBiela,
    getOneBiela
}