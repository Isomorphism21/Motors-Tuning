import kitArrastre from "../models/KitArrastre.models.js";

const getkitArrastreAll = async (req, res) => {
    try {
        const datos = await kitArrastre.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postkitArrastre = async (req, res) => {
    try {
        const kitArrastreBody = new kitArrastre(req.body);
        const nuevakitArrastre = await kitArrastreBody.save();
        res.json(nuevakitArrastre);
    } catch (error) {
        console.log(error);
    }
}

const deletekitArrastre = async (req, res) => {
    try {
        await kitArrastre.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatekitArrastre = async (req, res) => {
    try {
        const kitArrastreBody = await kitArrastre.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await kitArrastreBody.save();
        res.json(kitArrastreBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnekitArrastre = async (req, res) => {
    try {
        const datos = await kitArrastre.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getkitArrastreAll,
    postkitArrastre, 
    deletekitArrastre, 
    updatekitArrastre,
    getOnekitArrastre
}