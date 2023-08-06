import mongoose from "mongoose";

const facturaSchema = mongoose.Schema({
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    costo:{
        type:Number,
        required:true,
        trim:true
    },
    fecha:{
        type:String,
        required:true,
        trim:true
    },
    matricula:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'motos', 
        required: true 
    },
    empleado:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'usuarios', 
        required: true 
    },
    },
    {
        timestamps: true
    }
)

const factura = mongoose.model("registrofacturas", facturaSchema);

export default factura;