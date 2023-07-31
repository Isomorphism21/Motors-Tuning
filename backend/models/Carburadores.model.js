import mongoose from "mongoose";

const carburadoresSchema = mongoose.Schema({
    Marca:{
        type:String,
        required:true,
        trim:true
    },
    Origen:{
        type:String,
        required:true,
        trim:true
    },
    Moto:{
        type:String,
        required:true,
        trim:true
    },
    Precio:{
        type:Number,
        required:true,
        trim:true
    },
    ChiclerDeBaja:{
        type:String,
        required:true,
        trim:true
    },
    ChiclesDeAlta:{
        type:String,
        required:true,
        trim:true
    },
    Tipo:{
        type:String,
        required:true,
        trim:true
    },
    Stock:{
        type:Number,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    }
)

const carburadores = mongoose.model("Carburadores", carburadoresSchema);

export default carburadores;