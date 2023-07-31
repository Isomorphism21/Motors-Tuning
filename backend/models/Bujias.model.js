import mongoose from "mongoose";

const bujiasSchema = mongoose.Schema({
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

const bujias = mongoose.model("Bujias", bujiasSchema);

export default bujias;