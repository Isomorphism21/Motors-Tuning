import pastillasFreno from "../models/PastillasFreno.model.js";

const getpastillasFrenoAll = async (req, res) => {
    try {
        const datos = await pastillasFreno.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postpastillasFreno = async (req, res) => {
    try {
        const pastillasFrenoBody = new pastillasFreno(req.body);
        const nuevapastillasFreno = await pastillasFrenoBody.save();
        res.json(nuevapastillasFreno);
    } catch (error) {
        console.log(error);
    }
}

const deletepastillasFreno = async (req, res) => {
    try {
        await pastillasFreno.deleteOne({_id:req.params.id});
        res.status(400).send(); 
    } catch (error) {
        console.log(error);
    }
}

const updatepastillasFreno = async (req, res) => {
    try {
        const pastillasFrenoBody = await pastillasFreno.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});
        await pastillasFrenoBody.save();
        res.json(pastillasFrenoBody);
    } catch (error) {
        console.log(error);
    }
}

const getOnepastillasFreno = async (req, res) => {
    try {
        const datos = await pastillasFreno.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getpastillasFrenoAll,
    postpastillasFreno, 
    deletepastillasFreno, 
    updatepastillasFreno,
    getOnepastillasFreno
}