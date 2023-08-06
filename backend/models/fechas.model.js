import mongoose from "mongoose";

const fechasSchema = mongoose.Schema({
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
    }
});

const mainSchema = mongoose.Schema({
    fechas: {
      type: Map,
      of: fechasSchema
    },
    moto: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'motos', 
        required: true 
    }
});

const Fechas = mongoose.model('MotosInfos', mainSchema);

export default Fechas;