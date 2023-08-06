import mongoose from "mongoose";

const motosSchema = mongoose.Schema({
    referenciaMoto:{
        type:String,
        required:true,
        trim:true
    },
    nombreCliente:{
        type:String,
        required:true,
        trim:true
    },
    matricula:{
        type:String,
        required:true,
        trim:true
    },
    año:{
        type:Number,
        required:true,
        trim:true
    },
    fechaIngreso:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    }
)

const Motos = mongoose.model("motos", motosSchema);

export default Motos;