import mongoose from "mongoose";

const llantasSchema = mongoose.Schema({
    Tipo:{
        type:String,
        required:true,
        trim:true
    },
    Ubicacion:{
        type:String,
        required:true,
        trim:true
    },
    Ancho:{
        type:Number,
        required:true,
        trim:true
    },
    Perfil:{
        type:Number,
        required:true,
        trim:true
    },
    Carga:{
        type:Number,
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
        timestamps: true
    }
)

const llantas = mongoose.model("Llantas", llantasSchema);

export default llantas