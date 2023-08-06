import factura from "../models/facturas.models.js";

const getFacturaAll = async (req, res) => {
    try {
        const datos = await factura.find({matricula:req.params.id});
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

const postFactura = async (req, res) => {
    try {
        const facturaBody = new factura(req.body);
        const nuevaFactura = await facturaBody.save();
        res.json(nuevaFactura);
    } catch (error) {
        console.log(error);
    }
}

export {
    getFacturaAll,
    postFactura
}