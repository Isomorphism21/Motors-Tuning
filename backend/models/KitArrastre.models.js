import mongoose from "mongoose";

const kitArrastreSchema = mongoose.Schema({
    Marca:{
        type:String,
        required:true,
        trim:true
    },
    MaterialDeLaCorona:{
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
    CantidadDeDientesDeLaCorona:{
        type:Number,
        required:true,
        trim:true
    },
    LargoDeLaCadena:{
        type:String,
        required:true,
        trim:true
    },
    CantidadDeDientesDelPiñón:{
        type:Number,
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

const kitArrastre = mongoose.model("KitArrastre", kitArrastreSchema);

export default kitArrastre;