import mongoose from "mongoose";

const fechasSchema = mongoose.Schema({
    fecha:{
        type:String,
        required:true
    },
    descripcion: { 
        type: String,
        required: true 
    },
    detalle: { 
        type: String, 
        required: true 
    },
    acuerdos: { 
        type: String, 
        required: true 
    },
    kilometraje: {
        type: String,
        required: true
    },
    moto: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'motos', 
        required: true 
    }
});

const Fechas = mongoose.model('motosinfos', fechasSchema);

export default Fechas;