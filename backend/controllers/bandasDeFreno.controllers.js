import bandasDeFreno from "../models/BandasDeFreno.models.js";

const getbandasDeFrenoAll = async (req, res) => {
    try {
        const datos = await bandasDeFreno.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postbandasDeFreno = async (req, res) => {
    try {
        const bandasDeFrenoBody = new bandasDeFreno(req.body);
        const nuevobandasDeFrenoBody = await bandasDeFrenoBody.save();
        res.json(nuevobandasDeFrenoBody);
    } catch (error) {
        console.log(error);
    }
}

const deletebandasDeFreno = async (req, res) => {
    try {
        await bandasDeFreno.deleteOne({_id:req.params.id})
        res.status(400).send();
    } catch (error) {
        console.log(error);
    }
}

const updbandasDeFreno = async (req, res) => {
    try {
        const bandasDeFrenoBody = await bandasDeFreno.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await bandasDeFrenoBody.save();
        res.json(bandasDeFrenoBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnebandasDeFreno = async (req, res) => {
    try {
        const datos = await bandasDeFreno.findOne({_di:req.params.id})
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getbandasDeFrenoAll,
    postbandasDeFreno,
    deletebandasDeFreno,
    updbandasDeFreno,
    getOnebandasDeFreno
}