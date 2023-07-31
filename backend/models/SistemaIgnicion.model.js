import mongoose from "mongoose";

const sistemaIgnicionSchema = mongoose.Schema({
    Tipo:{
        type:String,
        required:true,
        trim:true
    },
    Referencia:{
        type:String,
        required:true,
        trim:true
    },
    Precio:{
        type:Number,
        required:true,
        trim:true
    },
    Marca:{
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
        timestamps:true
    }
)

const sistemaIgnicion = mongoose.model("SistemaIgnicion", sistemaIgnicionSchema);

export default sistemaIgnicion;