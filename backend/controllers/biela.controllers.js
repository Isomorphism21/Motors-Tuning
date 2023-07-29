import Biela from "../models/Biela.models.js";

const getBielaAll = async (req, res) => {
    try {
        const datos = await Biela.find();
        console.log(datos);
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

const deleteBiela = async (res, req) => {
    try {
        await Biela.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updateBiela = async (res, req) => {
    try {
        const bielaBody = await Biela.findOne({_id:req.params.id});
        if(req.body.Nombre){
            bielaBody.Nombre = req.body.Nombre
        }
        if(req.body.Cilindraje){
            bielaBody.Cilindraje = req.body.Cilindraje
        }
        if(req.body.Precio){
            bielaBody.Precio = req.body.Precio
        }
        if(req.body.Garantia){
            bielaBody.Garantia = req.body.Garantia
        }
        if(req.body.Stock){
            bielaBody.Stock = req.body.Stock
        }
        await bielaBody.save();
        res.json(bielaBody);
        
    } catch (error) {
        console.log(error);
    }
}

export {
    getBielaAll, postBiela, deleteBiela, updateBiela
}