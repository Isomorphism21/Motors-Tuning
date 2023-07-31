import sistemaIgnicion from "../models/SistemaIgnicion.model.js";

const getsistemaIgnicionAll = async (req, res) => {
    try {
        const datos = await sistemaIgnicion.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postsistemaIgnicion = async (req, res) => {
    try {
        const sistemaIgnicionBody = new sistemaIgnicion(req.body);
        const nuevasistemaIgnicion = await sistemaIgnicionBody.save();
        res.json(nuevasistemaIgnicion);
    } catch (error) {
        console.log(error);
    }
}

const deletesistemaIgnicion = async (req, res) => {
    try {
        await sistemaIgnicion.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatesistemaIgnicion = async (req, res) => {
    try {
        const sistemaIgnicionBody = await sistemaIgnicion.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await sistemaIgnicionBody.save();
        res.json(sistemaIgnicionBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnesistemaIgnicion = async (req, res) => {
    try {
        const datos = await sistemaIgnicion.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getsistemaIgnicionAll,
    postsistemaIgnicion, 
    deletesistemaIgnicion, 
    updatesistemaIgnicion,
    getOnesistemaIgnicion
}